import React, { PropTypes } from 'react';
import { createClassFromSpec } from 'react-vega';

const BarChartAfter = createClassFromSpec({ mode: 'vega', spec: {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "A basic bar chart example, with value labels shown upon mouse hover.",
  "width": 400,
  "height": 200,
  "padding": 5,
  "data": [
    {
      "name": "table",
      "values": [
        {"category": "Sanctuary or the nave", "amount": 55},
        {"category": "Church perspective view", "amount": 22},
        {"category": "Dinant (Battle of Dinant)", "amount": 16},
        {"category": "Freyr (Dinant)", "amount": 12},
        {
          "category": "Building façade and street (building façade (mordenization and urbanization))",
          "amount": 12
        },
        {"category": "Textiles-Tapestries (art)", "amount": 10},
        {"category": "Belfries (Sint-Romboutskathedraal)", "amount": 9},
        {"category": "Suburban house with garden", "amount": 9},
        {"category": "Nature (river but have human intervene)", "amount": 8},
        {"category": "Maredsous Abbey (Dinant)", "amount": 7}
      ]
    }
  ],
  "signals": [
    {
      "name": "tooltip",
      "value": {},
      "on": [
        {"events": "rect:mouseover", "update": "datum"},
        {"events": "rect:mouseout", "update": "{}"}
      ]
    }
  ],
  "scales": [
    {
      "name": "xscale",
      "type": "band",
      "domain": {"data": "table", "field": "category"},
      "range": "width",
      "padding": 0.05,
      "round": true
    },
    {
      "name": "yscale",
      "domain": {"data": "table", "field": "amount"},
      "nice": true,
      "range": "height"
    }
  ],
  "axes": [
    {
      "orient": "bottom",
      "scale": "xscale",
      "ticks": false,
      "domain": false,
      "title": "After WW1 (1919-1939) (2390 postercards)",
      "labelAngle": -45,
      "labelAlign": "right",
      "labelPadding": 15,
      "encode": {
        "labels": {
          "update": {
            "angle": {"value": -45},
            "align": {"value": "right"},
            "baseline": {"value": "middle"},
            "fontSize": {"value": 8}
          }
        },
        "title": {
          "update": {"fontSize": {"value": 14}, "fontWeight": {"value": "bold"}}
        }
      },
      "zindex": 1
    },
    {"orient": "left", "scale": "yscale"}
  ],
  "marks": [
    {
      "type": "rect",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "x": {"scale": "xscale", "field": "category"},
          "width": {"scale": "xscale", "band": 1},
          "y": {"scale": "yscale", "field": "amount"},
          "y2": {"scale": "yscale", "value": 0}
        },
        "update": {"fill": {"value": "grey"}},
        "hover": {"fill": {"value": "brown"}}
      }
    },
    {
      "type": "text",
      "encode": {
        "enter": {
          "align": {"value": "center"},
          "baseline": {"value": "bottom"},
          "fill": {"value": "#333"}
        },
        "update": {
          "x": {"scale": "xscale", "signal": "tooltip.category", "band": 0.5},
          "y": {"scale": "yscale", "signal": "tooltip.amount", "offset": -2},
          "text": {"signal": "tooltip.amount"},
          "fillOpacity": [
            {"test": "datum === tooltip", "value": 0},
            {"value": 1}
          ]
        }
      }
    }
  ],
  "config": {}
}});
export default BarChartAfter;