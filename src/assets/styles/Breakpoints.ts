  export const breakpoints = {
    xs: "360px",
    sm: "768px",
    md: "992px",
    lg: "1366px",
  };

  export const device = (
    Object.keys(breakpoints) as Array<keyof typeof breakpoints>
  ).reduce((acc, key) => {
    acc[key] = (style: String) =>
      `@media (max-width: ${breakpoints[key]}) { ${style} }`;
    return acc;
  }, {} as { [index: string]: Function });
