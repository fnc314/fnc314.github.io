import os
import json
from firebase_functions import https_fn
from firebase_admin import initialize_app
from ytmusicapi import YTMusic

initialize_app()

@https_fn.on_request(cors = https_fn.CorsOptions(cors_origins = "*", cors_methods = ["GET"]))
def nowplaying(req: https_fn.Request) -> https_fn.Response:
  """Fetches the recently playing track from YouTube Music history."""
  try:
    # Expect oauth.json to be in the current directory (functions-python)
    oauth_path = "oauth.json"
    if not os.path.exists(oauth_path):
      return https_fn.Response(
        json.dumps({"error": "Not authenticated. Missing oauth.json"}),
        status=500,
        headers={"Content-Type": "application/json"},
      )

    ytmusic = YTMusic(oauth_path)
    history = ytmusic.get_history()

    if not history or len(history) == 0:
      return https_fn.Response(
        json.dumps({"error": "No history found"}),
        status=404,
        headers={"Content-Type": "application/json"},
      )

    latest_track = history[0]

    # Format the response
    response_data = {
      "title": latest_track.get("title"),
      "artist": (
        ", ".join([a["name"] for a in latest_track.get("artists", [])])
        if latest_track.get("artists")
        else "Unknown Artist"
      ),
      "album": (
        latest_track.get("album", {}).get("name")
        if latest_track.get("album")
        else None
      ),
      "thumbnails": latest_track.get("thumbnails", []),
      "videoId": latest_track.get("videoId"),
    }

    return https_fn.Response(
      json.dumps(response_data),
      status=200,
      headers={"Content-Type": "application/json"},
    )
  except Exception as e:
    print(f"Error fetching now playing: {str(e)}")
    return https_fn.Response(
      json.dumps({"error": str(e)}),
      status=500,
      headers={"Content-Type": "application/json"},
    )
