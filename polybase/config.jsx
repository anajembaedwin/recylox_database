/* This file conatins initial setup for the polybase db */

// Imports

import { Polybase } from "@polybase/client";

// Namespace setup

// const db = new Polybase({
//   defaultNamespace: "polybase_test_namespace",
// });

const db = new Polybase({
  defaultNamespace: "pk/0x459b5cd08825bddef2229aa0b36cc4000e055174f4a7e4803fb70d98b44bcf4f038a79c3f9c789520c4a67f1303621f58c1dc013033cba98518d6f91ecf3559a/reccoin-test-database",
});

export default db;
