export default {
  id: "resp_682f85a3c2d48191918986c8370690e000799c6d1f0a5eea",
  object: "response",
  created_at: 1747944867,
  status: "completed",
  background: false,
  error: null,
  incomplete_details: null,
  instructions: null,
  max_output_tokens: null,
  model: "gpt-4.1-nano-2025-04-14",
  output: [
    {
      id: "msg_682f85a43b0481919c122edc3b82997c00799c6d1f0a5eea",
      type: "message",
      status: "completed",
      content: [
        {
          type: "output_text",
          annotations: [],
          text: '{\n  "Monday": {\n    "exercises": [\n      {\n        "name": "Overhead Shoulder Press",\n        "sets": 4,\n        "reps": "8-12"\n      },\n      {\n        "name": "Lateral Raises",\n        "sets": 3,\n        "reps": "12-15"\n      },\n      {\n        "name": "Front Raises",\n        "sets": 3,\n        "reps": "12-15"\n      }\n    ],\n    "progression_guidelines": "Increase weight by 2.5-5% once the upper rep range is easily achieved in all sets, maintaining proper form."\n  },\n  "Tuesday": {\n    "exercises": [\n      {\n        "name": "Barbell Curls",\n        "sets": 4,\n        "reps": "8-12"\n      },\n      {\n        "name": "Hammer Curls",\n        "sets": 3,\n        "reps": "10-12"\n      },\n      {\n        "name": "Concentration Curls",\n        "sets": 3,\n        "reps": "10-12"\n      }\n    ],\n    "progression_guidelines": "Add small weight increments (2.5-5 lbs) once the higher end of reps is manageable in all sets, focus on controlled movement."\n  },\n  "Wednesday": {\n    "exercises": [\n      {\n        "name": "Rest or Light Cardio",\n        "sets": 0,\n        "reps": "0"\n      }\n    ],\n    "progression_guidelines": "Recovery day to promote muscle growth and prevent overtraining."\n  },\n  "Thursday": {\n    "exercises": [\n      {\n        "name": "Arnold Press",\n        "sets": 4,\n        "reps": "8-12"\n      },\n      {\n        "name": "Upright Rows",\n        "sets": 3,\n        "reps": "10-12"\n      },\n      {\n        "name": "Reverse Flyes",\n        "sets": 3,\n        "reps": "12-15"\n      }\n    ],\n    "progression_guidelines": "Gradually increase resistance while maintaining proper form; focus on controlled, full-range movements."\n  },\n  "Friday": {\n    "exercises": [\n      {\n        "name": "Alternating Dumbbell Curls",\n        "sets": 4,\n        "reps": "8-12 per arm"\n      },\n      {\n        "name": "Preacher Curls",\n        "sets": 3,\n        "reps": "10-12"\n      },\n      {\n        "name": "Overhead Tricep Extensions",\n        "sets": 3,\n        "reps": "10-12"\n      }\n    ],\n    "progression_guidelines": "Increase weight when completing upper reps comfortably; maintain strict form for maximum effectiveness."\n  },\n  "Saturday": {\n    "exercises": [\n      {\n        "name": "Shoulder Shrugs",\n        "sets": 3,\n        "reps": "12-15"\n      },\n      {\n        "name": "Cable Face Pulls",\n        "sets": 3,\n        "reps": "12-15"\n      },\n      {\n        "name": "Dumbbell Lateral Raise (Drop Sets)",\n        "sets": 3,\n        "reps": "12-15"\n      }\n    ],\n    "progression_guidelines": "Gradually increase load; focus on contraction and control rather than momentum."\n  },\n  "Sunday": {\n    "exercises": [\n      {\n        "name": "Rest or Active Recovery",\n        "sets": 0,\n        "reps": "0"\n      }\n    ],\n    "progression_guidelines": "Allow muscles to recover; perform light stretching or yoga to maintain flexibility."\n  }\n}',
        },
      ],
      role: "assistant",
    },
  ],
  parallel_tool_calls: true,
  previous_response_id: null,
  reasoning: {
    effort: null,
    summary: null,
  },
  service_tier: "default",
  store: true,
  temperature: 1,
  text: {
    format: {
      type: "json_object",
    },
  },
  tool_choice: "auto",
  tools: [],
  top_p: 1,
  truncation: "disabled",
  usage: {
    input_tokens: 97,
    input_tokens_details: {
      cached_tokens: 0,
    },
    output_tokens: 819,
    output_tokens_details: {
      reasoning_tokens: 0,
    },
    total_tokens: 916,
  },
  user: null,
  metadata: {},
  output_text:
    '{\n  "Monday": {\n    "exercises": [\n      {\n        "name": "Overhead Shoulder Press",\n        "sets": 4,\n        "reps": "8-12"\n      },\n      {\n        "name": "Lateral Raises",\n        "sets": 3,\n        "reps": "12-15"\n      },\n      {\n        "name": "Front Raises",\n        "sets": 3,\n        "reps": "12-15"\n      }\n    ],\n    "progression_guidelines": "Increase weight by 2.5-5% once the upper rep range is easily achieved in all sets, maintaining proper form."\n  },\n  "Tuesday": {\n    "exercises": [\n      {\n        "name": "Barbell Curls",\n        "sets": 4,\n        "reps": "8-12"\n      },\n      {\n        "name": "Hammer Curls",\n        "sets": 3,\n        "reps": "10-12"\n      },\n      {\n        "name": "Concentration Curls",\n        "sets": 3,\n        "reps": "10-12"\n      }\n    ],\n    "progression_guidelines": "Add small weight increments (2.5-5 lbs) once the higher end of reps is manageable in all sets, focus on controlled movement."\n  },\n  "Wednesday": {\n    "exercises": [\n      {\n        "name": "Rest or Light Cardio",\n        "sets": 0,\n        "reps": "0"\n      }\n    ],\n    "progression_guidelines": "Recovery day to promote muscle growth and prevent overtraining."\n  },\n  "Thursday": {\n    "exercises": [\n      {\n        "name": "Arnold Press",\n        "sets": 4,\n        "reps": "8-12"\n      },\n      {\n        "name": "Upright Rows",\n        "sets": 3,\n        "reps": "10-12"\n      },\n      {\n        "name": "Reverse Flyes",\n        "sets": 3,\n        "reps": "12-15"\n      }\n    ],\n    "progression_guidelines": "Gradually increase resistance while maintaining proper form; focus on controlled, full-range movements."\n  },\n  "Friday": {\n    "exercises": [\n      {\n        "name": "Alternating Dumbbell Curls",\n        "sets": 4,\n        "reps": "8-12 per arm"\n      },\n      {\n        "name": "Preacher Curls",\n        "sets": 3,\n        "reps": "10-12"\n      },\n      {\n        "name": "Overhead Tricep Extensions",\n        "sets": 3,\n        "reps": "10-12"\n      }\n    ],\n    "progression_guidelines": "Increase weight when completing upper reps comfortably; maintain strict form for maximum effectiveness."\n  },\n  "Saturday": {\n    "exercises": [\n      {\n        "name": "Shoulder Shrugs",\n        "sets": 3,\n        "reps": "12-15"\n      },\n      {\n        "name": "Cable Face Pulls",\n        "sets": 3,\n        "reps": "12-15"\n      },\n      {\n        "name": "Dumbbell Lateral Raise (Drop Sets)",\n        "sets": 3,\n        "reps": "12-15"\n      }\n    ],\n    "progression_guidelines": "Gradually increase load; focus on contraction and control rather than momentum."\n  },\n  "Sunday": {\n    "exercises": [\n      {\n        "name": "Rest or Active Recovery",\n        "sets": 0,\n        "reps": "0"\n      }\n    ],\n    "progression_guidelines": "Allow muscles to recover; perform light stretching or yoga to maintain flexibility."\n  }\n}',
};
