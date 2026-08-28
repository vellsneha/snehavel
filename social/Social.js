var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/T8jPYD4W7xD08Rhnq5Yv/eeHxw5fU5Kh3yV42Iyzj/Db4PFE9Xk.js
import { jsx as _jsx9, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts4, ComponentViewportProvider, cx as cx9, forwardLoader, getFonts as getFonts4, Link as Link4, SmartComponentScopedContainer, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS9 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion9, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React9 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/6Vi3NZDhQ2KfYG8IKZoz/NP2oUdZbW2GtyRAnOeDa/ShqULyR1Z.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="black"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(motion.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx("div", { ...rest, ref });
});
var getProps = ({ height, id, stroke, width, ...props }) => {
  return { ...props, UO5clYVeQ: stroke ?? props.UO5clYVeQ ?? "rgb(0, 0, 0)" };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, UO5clYVeQ, ...restProps } = getProps(props);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-0CHoi", className), layoutId, ref, style: { "--43q7um": UO5clYVeQ, ...style } });
});
var css = [`.framer-0CHoi { -webkit-mask: ${mask}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-0CHoi");
Icon.displayName = "X";
var ShqULyR1Z_default = Icon;
addPropertyControls(Icon, { UO5clYVeQ: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Stroke", type: ControlType.Color } });

// http-url:https://framerusercontent.com/modules/DObrsjdBaq7U9BbmxcGh/KzRrQMaMBhg3tYglZxxt/KGGPazAln.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, motion as motion2, withCSS as withCSS2 } from "./_framer-runtime.js";
import * as React2 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask2 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10 0 L 0 5 L 10 10 L 20 5 Z" fill="transparent" height="10px" id="M6Ah80F5l" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 2)" width="20px"/><path d="M 0 0 L 10 5 L 20 0" fill="transparent" height="5px" id="eoBimoAUA" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 17)" width="20px"/><path d="M 0 0 L 10 5 L 20 0" fill="transparent" height="5px" id="N2O3Ja3mn" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 12)" width="20px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG2 = /* @__PURE__ */ forwardRef4((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx2(motion2.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx2("div", { ...rest, ref });
});
var getProps2 = ({ height, id, stroke, width, ...props }) => {
  return { ...props, UO5clYVeQ: stroke ?? props.UO5clYVeQ ?? "rgb(0, 0, 0)" };
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, UO5clYVeQ, ...restProps } = getProps2(props);
  return /* @__PURE__ */ _jsx2(SVG2, { ...restProps, className: cx2("framer-Ux8EM", className), layoutId, ref, style: { "--43q7um": UO5clYVeQ, ...style } });
});
var css2 = [`.framer-Ux8EM { -webkit-mask: ${mask2}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${mask2}; width: 24px; }`];
var Icon2 = withCSS2(Component2, css2, "framer-Ux8EM");
Icon2.displayName = "Layers";
var KGGPazAln_default = Icon2;
addPropertyControls2(Icon2, { UO5clYVeQ: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Stroke", type: ControlType2.Color } });

// http-url:https://framerusercontent.com/modules/zB9DNObEiwuB8W61xDly/TGmMC9s1j0aSK9bddIDW/JItBoYBgd.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx4, getFonts, Link, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion4, MotionConfigContext } from "framer-motion";
import * as React4 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/QL65NekRyGlej8APmFiL/EfJhiBMusrx6SCmF9LfF/aE7ozwXux.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx3, motion as motion3, withCSS as withCSS3 } from "./_framer-runtime.js";
import * as React3 from "react";
import { forwardRef as forwardRef6 } from "react";
var mask3 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 0 L 18 0 C 19.1 0 20 0.9 20 2 L 20 14 C 20 15.1 19.1 16 18 16 L 2 16 C 0.9 16 0 15.1 0 14 L 0 2 C 0 0.9 0.9 0 2 0 Z" fill="transparent" height="16px" id="NvQOXSS14" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 4)" width="20px"/><path d="M 20 0 L 10 7 L 0 0" fill="transparent" height="7px" id="XYqf_BtA8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 6)" width="20px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG3 = /* @__PURE__ */ forwardRef6((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx3(motion3.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx3("div", { ...rest, ref });
});
var getProps3 = ({ height, id, stroke, width, ...props }) => {
  return { ...props, UO5clYVeQ: stroke ?? props.UO5clYVeQ ?? "rgb(0, 0, 0)" };
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, UO5clYVeQ, ...restProps } = getProps3(props);
  return /* @__PURE__ */ _jsx3(SVG3, { ...restProps, className: cx3("framer-erqbn", className), layoutId, ref, style: { "--43q7um": UO5clYVeQ, ...style } });
});
var css3 = [`.framer-erqbn { -webkit-mask: ${mask3}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${mask3}; width: 24px; }`];
var Icon3 = withCSS3(Component3, css3, "framer-erqbn");
Icon3.displayName = "Mail";
var aE7ozwXux_default = Icon3;
addPropertyControls3(Icon3, { UO5clYVeQ: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Stroke", type: ControlType3.Color } });

// http-url:https://framerusercontent.com/modules/zB9DNObEiwuB8W61xDly/TGmMC9s1j0aSK9bddIDW/JItBoYBgd.js
var MailFonts = getFonts(aE7ozwXux_default);
var cycleOrder = ["w8eZPLKQt", "n6GzzD0HN"];
var serializationHash = "framer-8RYw0";
var variantClassNames = { n6GzzD0HN: "framer-v-s3lq2p", w8eZPLKQt: "framer-v-1geifcf" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { "Variant 1": "w8eZPLKQt", "Variant 2": "n6GzzD0HN" };
var Variants = motion4.create(React4.Fragment);
var getProps4 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "w8eZPLKQt" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "w8eZPLKQt", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onMouseEnter1uzvwa5 = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: true });
    setVariant("n6GzzD0HN");
  });
  const onMouseLeavebf67rv = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("w8eZPLKQt");
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx4(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition, { value: transition1, children: /* @__PURE__ */ _jsx4(Link, { href: "work.vellsneha@gmail.com", motionChild: true, nodeId: "w8eZPLKQt", openInNewTab: true, scopeId: "JItBoYBgd", children: /* @__PURE__ */ _jsx4(motion4.a, { ...restProps, ...gestureHandlers, className: `${cx4(scopingClassNames, "framer-1geifcf", className, classNames)} framer-qgmpkw`, "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "social__w8eZPLKQt", onMouseEnter: onMouseEnter1uzvwa5, ref: refBinding, style: { borderBottomLeftRadius: 21, borderBottomRightRadius: 21, borderTopLeftRadius: 21, borderTopRightRadius: 21, ...style }, ...addPropertyOverrides({ n6GzzD0HN: { "data-framer-name": "Variant 2", onMouseLeave: onMouseLeavebf67rv } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(aE7ozwXux_default, { animated: true, className: "framer-1j78pzm", layoutDependency, layoutId: "social__kn4a14JLI", style: { "--43q7um": "rgb(143, 143, 143)" }, variants: { n6GzzD0HN: { "--43q7um": "rgb(196, 132, 128)" } } }) }) }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-8RYw0.framer-qgmpkw, .framer-8RYw0 .framer-qgmpkw { display: block; }", ".framer-8RYw0.framer-1geifcf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 40px; }", ".framer-8RYw0 .framer-1j78pzm { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }"];
var FramerJItBoYBgd = withCSS4(Component4, css4, "framer-8RYw0");
var JItBoYBgd_default = FramerJItBoYBgd;
FramerJItBoYBgd.displayName = "email";
FramerJItBoYBgd.defaultProps = { height: 40, width: 40 };
addPropertyControls4(FramerJItBoYBgd, { variant: { options: ["w8eZPLKQt", "n6GzzD0HN"], optionTitles: ["Variant 1", "Variant 2"], title: "Variant", type: ControlType4.Enum } });
addFonts(FramerJItBoYBgd, [{ explicitInter: true, fonts: [] }, ...MailFonts], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/wIvmWOovndaEr36Nawos/el7Wyd9DmEsO4rzYIrAX/Rk5SA7qSA.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls6, ControlType as ControlType6, cx as cx6, getFonts as getFonts2, Link as Link2, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS6 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion6, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/WXrcYwU5ooGmkTpK3FVC/eLrPFzaeIwGyQunnBnz8/B9SzpfZGa.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls5, ControlType as ControlType5, cx as cx5, motion as motion5, withCSS as withCSS5 } from "./_framer-runtime.js";
import * as React5 from "react";
import { forwardRef as forwardRef9 } from "react";
var mask4 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6 0 C 9.314 0 12 2.686 12 6 L 12 13 L 8 13 L 8 6 C 8 4.895 7.105 4 6 4 C 4.895 4 4 4.895 4 6 L 4 13 L 0 13 L 0 6 C 0 2.686 2.686 0 6 0 Z" fill="transparent" height="13px" id="bRR84mvMX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(10 8)" width="12px"/><path d="M 0 12 L 0 0 L 4 0 L 4 12 Z" fill="transparent" height="12px" id="M4J08UOXj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 9)" width="4px"/><path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="CeIp4Vj9i" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 2)" width="4px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG4 = /* @__PURE__ */ forwardRef9((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx5(motion5.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx5("div", { ...rest, ref });
});
var getProps5 = ({ height, id, stroke, width, ...props }) => {
  return { ...props, UO5clYVeQ: stroke ?? props.UO5clYVeQ ?? "rgb(0, 0, 0)" };
};
var Component5 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, UO5clYVeQ, ...restProps } = getProps5(props);
  return /* @__PURE__ */ _jsx5(SVG4, { ...restProps, className: cx5("framer-YB3QI", className), layoutId, ref, style: { "--43q7um": UO5clYVeQ, ...style } });
});
var css5 = [`.framer-YB3QI { -webkit-mask: ${mask4}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${mask4}; width: 24px; }`];
var Icon4 = withCSS5(Component5, css5, "framer-YB3QI");
Icon4.displayName = "Linkedin";
var B9SzpfZGa_default = Icon4;
addPropertyControls5(Icon4, { UO5clYVeQ: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Stroke", type: ControlType5.Color } });

// http-url:https://framerusercontent.com/modules/wIvmWOovndaEr36Nawos/el7Wyd9DmEsO4rzYIrAX/Rk5SA7qSA.js
var LinkedinFonts = getFonts2(B9SzpfZGa_default);
var cycleOrder2 = ["fMuzH4XWg", "mIeWRStnh"];
var serializationHash2 = "framer-YLU0L";
var variantClassNames2 = { fMuzH4XWg: "framer-v-10potjv", mIeWRStnh: "framer-v-1orj48p" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { "Variant 1": "fMuzH4XWg", "Variant 2": "mIeWRStnh" };
var Variants2 = motion6.create(React6.Fragment);
var getProps6 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "fMuzH4XWg" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className, layoutId, variant, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "fMuzH4XWg", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const onMouseEntergfzv8x = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: true });
    setVariant("mIeWRStnh");
  });
  const onMouseLeavey0krcl = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("fMuzH4XWg");
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx6(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx6(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx6(Link2, { href: "www.linkedin.com/in/snehavellelath", motionChild: true, nodeId: "fMuzH4XWg", openInNewTab: true, scopeId: "Rk5SA7qSA", children: /* @__PURE__ */ _jsx6(motion6.a, { ...restProps, ...gestureHandlers, className: `${cx6(scopingClassNames, "framer-10potjv", className, classNames)} framer-1q16d3u`, "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "social__fMuzH4XWg", onMouseEnter: onMouseEntergfzv8x, ref: refBinding, style: { borderBottomLeftRadius: 21, borderBottomRightRadius: 21, borderTopLeftRadius: 21, borderTopRightRadius: 21, ...style }, ...addPropertyOverrides2({ mIeWRStnh: { "data-framer-name": "Variant 2", onMouseLeave: onMouseLeavey0krcl } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx6(B9SzpfZGa_default, { animated: true, className: "framer-eqhprj", layoutDependency, layoutId: "social__oTLzuFqid", style: { "--43q7um": "rgb(143, 143, 143)" }, variants: { mIeWRStnh: { "--43q7um": "rgb(120, 158, 210)" } } }) }) }) }) }) });
});
var css6 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-YLU0L.framer-1q16d3u, .framer-YLU0L .framer-1q16d3u { display: block; }", ".framer-YLU0L.framer-10potjv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 40px; }", ".framer-YLU0L .framer-eqhprj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }"];
var FramerRk5SA7qSA = withCSS6(Component6, css6, "framer-YLU0L");
var Rk5SA7qSA_default = FramerRk5SA7qSA;
FramerRk5SA7qSA.displayName = "linkedin";
FramerRk5SA7qSA.defaultProps = { height: 40, width: 40 };
addPropertyControls6(FramerRk5SA7qSA, { variant: { options: ["fMuzH4XWg", "mIeWRStnh"], optionTitles: ["Variant 1", "Variant 2"], title: "Variant", type: ControlType6.Enum } });
addFonts2(FramerRk5SA7qSA, [{ explicitInter: true, fonts: [] }, ...LinkedinFonts], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/La1M1nM5SBIDkFKNzAV9/MERmrAF7INILEKzHC90O/txDpaBDQh.js
import { jsx as _jsx8 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls8, ControlType as ControlType8, cx as cx8, getFonts as getFonts3, Link as Link3, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS8 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion8, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React8 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/Bqcgp1HsHJeAORwsuIuS/eNzhAt2nICpuoN337IL9/HqobPj5er.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls7, ControlType as ControlType7, cx as cx7, motion as motion7, withCSS as withCSS7 } from "./_framer-runtime.js";
import * as React7 from "react";
import { forwardRef as forwardRef12 } from "react";
var mask5 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 7 18.027 C 2 19.527 2 15.527 0 15.027 M 14 21.027 L 14 17.157 C 14.076 16.192 13.733 15.242 13.06 14.547 C 16.2 14.197 19.5 13.007 19.5 7.547 C 19.5 6.151 18.963 4.808 18 3.797 C 18.456 2.575 18.424 1.225 17.91 0.027 C 17.91 0.027 16.73 -0.323 14 1.507 C 11.708 0.886 9.292 0.886 7 1.507 C 4.27 -0.323 3.09 0.027 3.09 0.027 C 2.576 1.225 2.544 2.575 3 3.797 C 2.03 4.815 1.493 6.17 1.5 7.577 C 1.5 12.997 4.8 14.187 7.94 14.577 C 7.275 15.264 6.933 16.202 7 17.157 L 7 21.027" fill="transparent" height="21.026793107219298px" id="mVN_XlKPb" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(2 0.973)" width="19.499999957066166px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG5 = /* @__PURE__ */ forwardRef12((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx7(motion7.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx7("div", { ...rest, ref });
});
var getProps7 = ({ height, id, stroke, width, ...props }) => {
  return { ...props, UO5clYVeQ: stroke ?? props.UO5clYVeQ ?? "rgb(0, 0, 0)" };
};
var Component7 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, UO5clYVeQ, ...restProps } = getProps7(props);
  return /* @__PURE__ */ _jsx7(SVG5, { ...restProps, className: cx7("framer-omKat", className), layoutId, ref, style: { "--43q7um": UO5clYVeQ, ...style } });
});
var css7 = [`.framer-omKat { -webkit-mask: ${mask5}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${mask5}; width: 24px; }`];
var Icon5 = withCSS7(Component7, css7, "framer-omKat");
Icon5.displayName = "Github";
var HqobPj5er_default = Icon5;
addPropertyControls7(Icon5, { UO5clYVeQ: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Stroke", type: ControlType7.Color } });

// http-url:https://framerusercontent.com/modules/La1M1nM5SBIDkFKNzAV9/MERmrAF7INILEKzHC90O/txDpaBDQh.js
var GithubFonts = getFonts3(HqobPj5er_default);
var cycleOrder3 = ["RVixF2jPO", "j0XkSbjV5"];
var serializationHash3 = "framer-ciz0v";
var variantClassNames3 = { j0XkSbjV5: "framer-v-1xjo1wv", RVixF2jPO: "framer-v-1tsz2si" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition3 = ({ value, children }) => {
  const config = React8.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx8(MotionConfigContext3.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { "Variant 1": "RVixF2jPO", "Variant 2": "j0XkSbjV5" };
var Variants3 = motion8.create(React8.Fragment);
var getProps8 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "RVixF2jPO" };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component8 = /* @__PURE__ */ React8.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React8.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className, layoutId, variant, ...restProps } = getProps8(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder3, defaultVariant: "RVixF2jPO", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback3(baseVariant);
  const onMouseEnter11wf1ds = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: true });
    setVariant("j0XkSbjV5");
  });
  const onMouseLeave1gi0d38 = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("RVixF2jPO");
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx8(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx8(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx8(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx8(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx8(Link3, { href: "https://github.com/vellsneha", motionChild: true, nodeId: "RVixF2jPO", openInNewTab: true, scopeId: "txDpaBDQh", children: /* @__PURE__ */ _jsx8(motion8.a, { ...restProps, ...gestureHandlers, className: `${cx8(scopingClassNames, "framer-1tsz2si", className, classNames)} framer-16v9tnc`, "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "social__RVixF2jPO", onMouseEnter: onMouseEnter11wf1ds, ref: refBinding, style: { borderBottomLeftRadius: 21, borderBottomRightRadius: 21, borderTopLeftRadius: 21, borderTopRightRadius: 21, ...style }, ...addPropertyOverrides3({ j0XkSbjV5: { "data-framer-name": "Variant 2", onMouseLeave: onMouseLeave1gi0d38 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(HqobPj5er_default, { animated: true, className: "framer-53jndh", layoutDependency, layoutId: "social__Qps6z4Ad4", style: { "--43q7um": "rgb(143, 143, 143)" }, variants: { j0XkSbjV5: { "--43q7um": "rgb(179, 157, 219)" } } }) }) }) }) }) });
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ciz0v.framer-16v9tnc, .framer-ciz0v .framer-16v9tnc { display: block; }", ".framer-ciz0v.framer-1tsz2si { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 40px; }", ".framer-ciz0v .framer-53jndh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }"];
var FramertxDpaBDQh = withCSS8(Component8, css8, "framer-ciz0v");
var txDpaBDQh_default = FramertxDpaBDQh;
FramertxDpaBDQh.displayName = "github";
FramertxDpaBDQh.defaultProps = { height: 40, width: 40 };
addPropertyControls8(FramertxDpaBDQh, { variant: { options: ["RVixF2jPO", "j0XkSbjV5"], optionTitles: ["Variant 1", "Variant 2"], title: "Variant", type: ControlType8.Enum } });
addFonts3(FramertxDpaBDQh, [{ explicitInter: true, fonts: [] }, ...GithubFonts], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/T8jPYD4W7xD08Rhnq5Yv/eeHxw5fU5Kh3yV42Iyzj/Db4PFE9Xk.js
var GithubFonts2 = getFonts4(txDpaBDQh_default);
var LinkedinFonts2 = getFonts4(Rk5SA7qSA_default);
var TwitterFonts = getFonts4(ShqULyR1Z_default);
var EmailFonts = getFonts4(JItBoYBgd_default);
var LayersFonts = getFonts4(KGGPazAln_default);
var serializationHash4 = "framer-iwPG6";
var variantClassNames4 = { Fp_2WOLp5: "framer-v-16m69h7" };
var transition14 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition4 = ({ value, children }) => {
  const config = React9.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React9.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx9(MotionConfigContext4.Provider, { value: contextValue, children });
};
var Variants4 = motion9.create(React9.Fragment);
var getProps9 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component9 = /* @__PURE__ */ React9.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React9.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className, layoutId, variant, ...restProps } = getProps9(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ defaultVariant: "Fp_2WOLp5", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx9(serializationHash4, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx9(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx9(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx9(Transition4, { value: transition14, children: /* @__PURE__ */ _jsxs(motion9.div, { ...restProps, ...gestureHandlers, className: cx9(scopingClassNames, "framer-16m69h7", className, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "social__Fp_2WOLp5", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 40, width: "40px", y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 40) - 0 - 40) / 2), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-13yhjcs-container", layoutDependency, layoutId: "social__fRNetpKVa-container", nodeId: "fRNetpKVa", rendersWithMotion: true, scopeId: "Db4PFE9Xk", children: /* @__PURE__ */ _jsx9(txDpaBDQh_default, { height: "100%", id: "fRNetpKVa", layoutId: "social__fRNetpKVa", style: { height: "100%", width: "100%" }, variant: matchVariant("RVixF2jPO"), width: "100%" }) }) }), /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 40, width: "40px", y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 40) - 0 - 40) / 2), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-owbx4v-container", layoutDependency, layoutId: "social__vHNWDFsXK-container", nodeId: "vHNWDFsXK", rendersWithMotion: true, scopeId: "Db4PFE9Xk", children: /* @__PURE__ */ _jsx9(Rk5SA7qSA_default, { height: "100%", id: "vHNWDFsXK", layoutId: "social__vHNWDFsXK", style: { height: "100%", width: "100%" }, variant: matchVariant("fMuzH4XWg"), width: "100%" }) }) }), /* @__PURE__ */ _jsx9(Link4, { href: "https://x.com/itsvells", motionChild: true, nodeId: "r6c9O88NP", openInNewTab: true, scopeId: "Db4PFE9Xk", children: /* @__PURE__ */ _jsx9(motion9.a, { className: "framer-o1qm0t framer-nke135", "data-framer-name": "x", layoutDependency, layoutId: "social__r6c9O88NP", style: { borderBottomLeftRadius: 21, borderBottomRightRadius: 21, borderTopLeftRadius: 21, borderTopRightRadius: 21 }, children: /* @__PURE__ */ _jsx9(ShqULyR1Z_default, { animated: true, className: "framer-1dwgume", layoutDependency, layoutId: "social__gqxVeC1w7", style: { "--43q7um": "rgb(143, 143, 143)" } }) }) }), /* @__PURE__ */ _jsx9(ComponentViewportProvider, { height: 40, width: "40px", y: (componentViewport?.y || 0) + (0 + ((componentViewport?.height || 40) - 0 - 40) / 2), children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer, { className: "framer-e0qtx-container", layoutDependency, layoutId: "social__S4zdKSuHB-container", nodeId: "S4zdKSuHB", rendersWithMotion: true, scopeId: "Db4PFE9Xk", children: /* @__PURE__ */ _jsx9(JItBoYBgd_default, { height: "100%", id: "S4zdKSuHB", layoutId: "social__S4zdKSuHB", style: { height: "100%", width: "100%" }, variant: matchVariant("w8eZPLKQt"), width: "100%" }) }) }), /* @__PURE__ */ _jsx9(Link4, { href: "work.vellsneha@gmail.com", motionChild: true, nodeId: "XUECagUAk", openInNewTab: true, scopeId: "Db4PFE9Xk", children: /* @__PURE__ */ _jsx9(motion9.a, { className: "framer-1xrsodg framer-nke135", "data-framer-name": "email", layoutDependency, layoutId: "social__XUECagUAk", style: { borderBottomLeftRadius: 21, borderBottomRightRadius: 21, borderTopLeftRadius: 21, borderTopRightRadius: 21 }, children: /* @__PURE__ */ _jsx9(KGGPazAln_default, { animated: true, className: "framer-1eugezd", layoutDependency, layoutId: "social__aCsJB36T9", style: { "--43q7um": "rgb(143, 143, 143)" } }) }) })] }) }) }) });
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-iwPG6.framer-nke135, .framer-iwPG6 .framer-nke135 { display: block; }", ".framer-iwPG6.framer-16m69h7 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-iwPG6 .framer-13yhjcs-container, .framer-iwPG6 .framer-owbx4v-container, .framer-iwPG6 .framer-e0qtx-container { flex: none; height: 40px; position: relative; width: 40px; }", ".framer-iwPG6 .framer-o1qm0t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 40px; }", ".framer-iwPG6 .framer-1dwgume, .framer-iwPG6 .framer-1eugezd { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }", ".framer-iwPG6 .framer-1xrsodg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 40px; }"];
var FramerDb4PFE9Xk = withCSS9(Component9, css9, "framer-iwPG6");
var Db4PFE9Xk_default = FramerDb4PFE9Xk;
FramerDb4PFE9Xk.displayName = "social";
FramerDb4PFE9Xk.defaultProps = { height: 40, width: 260 };
addFonts4(FramerDb4PFE9Xk, [{ explicitInter: true, fonts: [] }, ...GithubFonts2, ...LinkedinFonts2, ...TwitterFonts, ...EmailFonts, ...LayersFonts], { supportsExplicitInterCodegen: true });
FramerDb4PFE9Xk.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(txDpaBDQh_default, {}, context), forwardLoader(Rk5SA7qSA_default, {}, context), forwardLoader(JItBoYBgd_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerDb4PFE9Xk", "slots": [], "annotations": { "framerIntrinsicWidth": "260", "framerImmutableVariables": "true", "framerDisplayContentsDiv": "false", "framerColorSyntax": "true", "framerComponentViewportWidth": "true", "framerIntrinsicHeight": "40", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}', "framerAutoSizeImages": "true", "framerContractVersion": "1" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  Db4PFE9Xk_default as default
};
