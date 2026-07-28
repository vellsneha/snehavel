import type { ComponentType } from "react";
import SocialComponent from "@social/Social.js";

export const Social = SocialComponent as ComponentType<Record<string, unknown>>;
