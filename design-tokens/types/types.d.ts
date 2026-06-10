export interface SpacingTokens {
  reset: string;
  padding: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  margin: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
}

export interface BreakpointTokens {
  breakpoint: {
    mobile: { max: { value: string } };
    tablet: { min: { value: string }; max: { value: string } };
    desktop: { min: { value: string } };
  };
}
