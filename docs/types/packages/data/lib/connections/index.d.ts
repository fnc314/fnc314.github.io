import { type ArtifactConnectionData, type ConnectionInstance, type ProfessionalConnectionJsonData } from "@fnc314/packages.types";
export declare const Connections: {
    direct: {
        phone: ConnectionInstance;
        email: ConnectionInstance;
    };
    social: {
        linkedIn: ProfessionalConnectionJsonData;
        github: ProfessionalConnectionJsonData;
        medium: ProfessionalConnectionJsonData;
    };
    resume: {
        googleDoc: ArtifactConnectionData;
        pdf: ArtifactConnectionData;
    };
};
