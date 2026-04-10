
/**
 * 01_foundation/ui-registry.js
 * Central Registry for Design System Components Metadata & Default Props
 */

window.DS_UI_REGISTRY = {
  "badge": {
    "name": "Badge",
    "render": "badge",
    "defaultProps": { "type": "number", "style": "primary", "size": "medium", "value": "5" },
    "controls": [
      { "prop": "type", "type": "select", "options": ["number", "dot"] },
      { "prop": "style", "type": "select", "options": ["primary", "secondary", "alert", "white"] },
      { "prop": "size", "type": "select", "options": ["small", "medium", "large"] }
    ]
  },
  "tag": {
    "name": "Tag",
    "render": "tag",
    "defaultProps": { "label": "Label", "variant": "gradient-primary", "pill": true },
    "controls": [
      { "prop": "variant", "type": "select", "options": ["gradient-primary", "solid-primary", "outline-secondary", "white"] },
      { "prop": "pill", "type": "toggle" }
    ]
  },
  "button": {
    "name": "Button",
    "render": "button",
    "defaultProps": { "label": "Label", "priority": "solid-primary", "size": "large", "state": "enabled", "iconOnly": false },
    "controls": [
      { "prop": "label", "type": "text" },
      { "prop": "priority", "type": "select", "options": ["solid-primary", "outline-primary", "outline-secondary", "outline-tertiary", "outline-danger"] },
      { "prop": "size", "type": "select", "options": ["medium", "large", "xlarge", "xxlarge"] },
      { "prop": "state", "type": "select", "options": ["enabled", "hovered", "focused", "pressed", "disabled"] },
      { "prop": "leftIcon", "type": "select", "options": ["", "star_solid", "plus_solid", "chevron-right_solid", "paper-plane_solid"] },
      { "prop": "rightIcon", "type": "select", "options": ["", "star_solid", "plus_solid", "chevron-right_solid", "paper-plane_solid"] },
      { "prop": "iconOnly", "type": "toggle" }
    ]
  },
  "ghost-button": {
    "name": "Ghost Button",
    "render": "ghostButton",
    "defaultProps": { "label": "Label", "size": "medium" },
    "controls": [
      { "prop": "size", "type": "select", "options": ["small", "medium", "large"] }
    ]
  },
  "chip": {
    "name": "Chip",
    "render": "chip",
    "defaultProps": { "label": "Chip", "variant": "solid-primary", "selected": false, "size": "medium" },
    "controls": [
      { "prop": "variant", "type": "select", "options": ["solid-primary", "outline-secondary", "outline-gradient"] },
      { "prop": "selected", "type": "toggle" }
    ]
  },
  "avatar": {
    "name": "Avatar",
    "render": "avatar",
    "defaultProps": { "size": "medium", "type": "user" },
    "controls": [
      { "prop": "size", "type": "select", "options": ["small", "medium", "large", "xlarge"] },
      { "prop": "type", "type": "select", "options": ["user", "ai"] }
    ]
  },
  "checkbox": {
    "name": "Checkbox",
    "render": "checkbox",
    "defaultProps": { "checked": false, "label": "Checkbox Label", "state": "enabled" },
    "controls": [
      { "prop": "checked", "type": "toggle" },
      { "prop": "state", "type": "select", "options": ["enabled", "disabled"] }
    ]
  },
  "radio": {
    "name": "Radio Button",
    "render": "radio",
    "defaultProps": { "checked": false, "label": "Radio Label", "state": "enabled" },
    "controls": [
      { "prop": "checked", "type": "toggle" },
      { "prop": "state", "type": "select", "options": ["enabled", "disabled"] }
    ]
  },
  "mappin": {
    "name": "Map Pin",
    "render": "mappin",
    "defaultProps": { "style": "solid", "type": "selected", "number": "1", "text": "Text" },
    "controls": [
      { "prop": "style", "type": "select", "options": ["solid", "outline"] },
      { "prop": "type", "type": "select", "options": ["selected", "other", "number-single", "number-multiple", "check"] },
      { "prop": "number", "type": "text" },
      { "prop": "text", "type": "text" }
    ]
  },
  "sw": {
    "name": "Switch",
    "render": "switch",
    "defaultProps": { "selected": false, "state": "enabled" },
    "controls": [
      { "prop": "selected", "type": "toggle" },
      { "prop": "state", "type": "select", "options": ["enabled", "disabled"] }
    ]
  },
  "score": {
    "name": "Score",
    "render": "score",
    "defaultProps": { "rating": 4.5, "max": 5, "trail": "(128)", "size": "md" },
    "controls": [
      { "prop": "size", "type": "select", "options": ["sm", "md", "lg"] },
      { "prop": "rating", "type": "number", "min": 0, "max": 5, "step": 0.5 }
    ]
  },
  "mediacard": {
    "name": "Media Card",
    "render": "mediaCard",
    "defaultProps": { 
      "title": "AIGuide: Basic concepts of LLM", 
      "imgBg": "linear-gradient(135deg,#ede9fe,#dbeafe)",
      "imgIcon": "",
      "infoRows": ["60 mins", "Beginner"],
      "tags": ["AI", "Guide"],
      "primaryCta": "Start Learning",
      "imgSize": "lg"
    },
    "controls": [
      { "prop": "imgSize", "type": "select", "options": ["sm", "md", "lg"] }
    ]
  },
  "onboardingcard": {
    "name": "Onboarding Card",
    "render": "onboardingCard",
    "defaultProps": {
      "titleTop": "薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔",
      "titleBottom": "薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔",
      "badgeText": "VS",
      "titleWidth": "310px",
      "titleTopOffset": "24px",
      "titleBottomOffset": "193px",
      "centered": true
    },
    "controls": [
      { "prop": "titleTop", "type": "text" },
      { "prop": "titleBottom", "type": "text" },
      { "prop": "badgeText", "type": "text" },
      { "prop": "titleWidth", "type": "text" },
      { "prop": "titleTopOffset", "type": "text" },
      { "prop": "titleBottomOffset", "type": "text" },
      { "prop": "centered", "type": "boolean" }
    ]
  },
  "categorycard": {
    "name": "Category Card",
    "render": "categoryCard",
    "defaultProps": {
      "form": "square",
      "contents": "image",
      "label": "カテゴリ",
      "title": "薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇薔薇"
    },
    "controls": [
      { "prop": "form", "type": "select", "options": ["horizontal", "square", "vertical"] },
      { "prop": "contents", "type": "select", "options": ["image", "video"] },
      { "prop": "label", "type": "text" },
      { "prop": "title", "type": "text" }
    ]
  },
  "chatmodal": {
    "name": "Chat Modal",
    "render": "chatModal",
    "defaultProps": {
      "type": "default-100",
      "placeholder": "なんでも聞いてください"
    },
    "controls": [
      { "prop": "type", "type": "select", "options": ["header-only", "default-100", "default-70"] },
      { "prop": "placeholder", "type": "text" }
    ]
  },
  "divider": {
    "name": "Divider",
    "render": "divider",
    "defaultProps": { "spacing": "medium" },
    "controls": [
      { "prop": "spacing", "type": "select", "options": ["small", "medium", "large"] }
    ]
  },
  "progress": {
    "name": "Progress",
    "render": "progress",
    "defaultProps": { "value": 60, "max": 100, "label": "Uploading...", "type": "linear" },
    "controls": [
      { "prop": "value", "type": "number", "min": 0, "max": 100 },
      { "prop": "type", "type": "select", "options": ["linear", "circle"] }
    ]
  },
  "ai-text-input": {
    "name": "AI Text Input",
    "render": "aiInput",
    "defaultProps": { "size": "simple", "state": "default" },
    "controls": [
      { "prop": "size", "type": "select", "options": ["simple", "multiple"] },
      { "prop": "state", "type": "select", "options": ["default", "focused", "typing", "typed", "disabled"] }
    ]
  }
,
  "accordion": {
    "name": "accordion",
    "render": "accordion",
    "defaultProps": {},
    "controls": []
  },
  "toggle": {
    "name": "toggle",
    "render": "toggle",
    "defaultProps": {},
    "controls": []
  },
  "pagination": {
    "name": "pagination",
    "render": "pagination",
    "defaultProps": {},
    "controls": []
  },
  "pgnav": {
    "name": "Pagination Nav",
    "render": "paginationNav",
    "defaultProps": { "direction": "prev", "state": "enabled" },
    "controls": [
      { "prop": "direction", "type": "select", "options": ["prev", "next"] },
      { "prop": "state", "type": "select", "options": ["enabled", "hovered", "focused", "pressed", "disabled"] }
    ]
  },
  "scrim": {
    "name": "Scrim",
    "render": "scrim",
    "defaultProps": {},
    "controls": []
  },
  "filterinput": {
    "name": "Filter Input",
    "render": "filterInput",
    "defaultProps": { "type": "search", "placeholder": "商品名、型番などを入力", "minValue": "18,000円", "maxValue": "25,000円" },
    "controls": [
      { "prop": "type", "type": "select", "options": ["search", "price"] }
    ]
  },
  "floatingbutton": {
    "name": "Floating Button",
    "render": "floatingButton",
    "defaultProps": { "type": "ai-agent" },
    "controls": [
      { "prop": "type", "type": "select", "options": ["ai-agent", "close"] }
    ]
  },
  "progressindicator": {
    "name": "Progress Indicator",
    "render": "progressIndicator",
    "defaultProps": { "value": 20 },
    "controls": [
      { "prop": "value", "type": "number", "min": 0, "max": 100 }
    ]
  },
  "list": {
    "name": "list",
    "render": "list",
    "defaultProps": {},
    "controls": []
  },
  "listsel": {
    "name": "listsel",
    "render": "listsel",
    "defaultProps": {},
    "controls": []
  },
  "footer": {
    "name": "footer",
    "render": "footer",
    "defaultProps": {},
    "controls": []
  },
  "pagind": {
    "name": "pagind",
    "render": "pagind",
    "defaultProps": {},
    "controls": []
  },
  "message": {
    "name": "message",
    "render": "message",
    "defaultProps": {},
    "controls": []
  },
  "msgactionbar": {
    "name": "msgactionbar",
    "render": "msgactionbar",
    "defaultProps": {},
    "controls": []
  },
  "tooltip": {
    "name": "tooltip",
    "render": "tooltip",
    "defaultProps": {},
    "controls": []
  },
  "tab": {
    "name": "tab",
    "render": "tab",
    "defaultProps": {},
    "controls": []
  },
  "textinput": {
    "name": "textinput",
    "render": "textinput",
    "defaultProps": {},
    "controls": []
  },
  "thumb": {
    "name": "thumb",
    "render": "thumb",
    "defaultProps": {},
    "controls": []
  },
  "aibg": {
    "name": "aibg",
    "render": "aibg",
    "defaultProps": {},
    "controls": []
  },
  "topnav": {
    "name": "topnav",
    "render": "topnav",
    "defaultProps": {},
    "controls": []
  },
  "aisc": {
    "name": "aisc",
    "render": "aisc",
    "defaultProps": {},
    "controls": []
  },
  "aitinput": {
    "name": "aitinput",
    "render": "aitinput",
    "defaultProps": {},
    "controls": []
  },
  "agenthero": {
    "name": "agenthero",
    "render": "agenthero",
    "defaultProps": {},
    "controls": []
  },
  "card": {
    "name": "card",
    "render": "card",
    "defaultProps": {},
    "controls": []
  },
  "choicecard": {
    "name": "choicecard",
    "render": "choicecard",
    "defaultProps": {},
    "controls": []
  },
  "qcard": {
    "name": "qcard",
    "render": "qcard",
    "defaultProps": {},
    "controls": []
  },
  "selcard": {
    "name": "selcard",
    "render": "selcard",
    "defaultProps": {},
    "controls": []
  },
  "rpattern": {
    "name": "rpattern",
    "render": "rpattern",
    "defaultProps": {},
    "controls": []
  },
  "chipcard": {
    "name": "chipcard",
    "render": "chipcard",
    "defaultProps": {},
    "controls": []
  },
  "cardbtn": {
    "name": "cardbtn",
    "render": "cardbtn",
    "defaultProps": {},
    "controls": []
  },
  "chipgrp": {
    "name": "chipgrp",
    "render": "chipgrp",
    "defaultProps": {},
    "controls": []
  },
  "infocard": {
    "name": "infocard",
    "render": "infocard",
    "defaultProps": {},
    "controls": []
  },
  "reviewcard": {
    "name": "reviewcard",
    "render": "reviewcard",
    "defaultProps": {},
    "controls": []
  },
  "mcthumbnail": {
    "name": "mcthumbnail",
    "render": "mcthumbnail",
    "defaultProps": {},
    "controls": []
  },
  "mctaggroup": {
    "name": "mctaggroup",
    "render": "mctaggroup",
    "defaultProps": {},
    "controls": []
  },
  "menu": {
    "name": "menu",
    "render": "menu",
    "defaultProps": {},
    "controls": []
  },
  "modal": {
    "name": "modal",
    "render": "modal",
    "defaultProps": {},
    "controls": []
  },
  "carousel": {
    "name": "carousel",
    "render": "carousel",
    "defaultProps": {},
    "controls": []
  },
  "cardexpand": {
    "name": "cardexpand",
    "render": "cardexpand",
    "defaultProps": {},
    "controls": []
  }
};
