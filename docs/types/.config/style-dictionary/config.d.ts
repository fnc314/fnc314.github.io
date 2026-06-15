declare const _default: {
    source: string[];
    platforms: {
        cssIcons: {
            transforms: ("attribute/cti" | "attribute/color" | "name/kebab" | "color/css" | "asset/base64")[];
            buildPath: string;
            files: {
                destination: string;
                format: "css/variables";
                filter: string;
                options: {
                    outputReferences: true;
                };
            }[];
        };
        css: {
            transformGroup: "css";
            buildPath: string;
            files: {
                destination: string;
                format: "css/variables";
                filter: string;
                options: {
                    outputReferences: true;
                };
            }[];
        };
        materialCss: {
            transforms: ("attribute/cti" | "attribute/color" | "name/kebab" | "color/css")[];
            buildPath: string;
            files: {
                destination: string;
                format: "css/variables";
                filter: string;
                options: {
                    outputReferences: true;
                };
            }[];
        };
        dtcgJson: {
            transformGroup: "web";
            buildPath: string;
            files: {
                destination: string;
                format: "json/nested";
                options: {
                    outputReferences: true;
                };
            }[];
        };
    };
    log: {
        warnings: "warn";
        verbosity: "verbose";
        errors: {
            brokenReferences: "throw";
        };
    };
};
export default _default;
