import { vi } from "vitest";

vi.mock("react-native-svg", async () => {
  const React = await import("react");

  return {
    Svg: ({ children, ...props }: { children?: React.ReactNode }) =>
      React.createElement("Svg", props, children),
    Path: (props: object) => React.createElement("Path", props),
    default: ({ children, ...props }: { children?: React.ReactNode }) =>
      React.createElement("Svg", props, children),
  };
});

const icons = await import("../src");

describe("generated icons", () => {
  it("exports icons from the package index", () => {
    expect(typeof icons.SiReact).toBe("function");
    expect(icons.SiReactHex).toMatch(/^[A-F0-9]{6}$/);
    expect(icons.SiReactSlug).toBe("react");
    expect(icons.SiReactTitle).toBe("React");
  });

  it('uses the brand hex for color="default"', () => {
    const element = icons.SiReact({ color: "default" });
    const child = element.props.children;

    expect(child.props.fill).toBe(`#${icons.SiReactHex}`);
  });

  it("renders a React Native SVG shape structurally", () => {
    const element = icons.SiReact({ size: 32, title: "React logo" });
    const child = element.props.children;

    expect(element.props.width).toBe(32);
    expect(element.props.height).toBe(32);
    expect(element.props.viewBox).toBe("0 0 24 24");
    expect(element.props.accessibilityLabel).toBe("React logo");
    expect(child.props.d).toEqual(expect.any(String));
    expect(child.props.d.length).toBeGreaterThan(10);
  });
});
