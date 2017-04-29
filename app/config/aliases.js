import { resolve } from "path";

import moduleAlias from "module-alias";

moduleAlias.addAlias("@root", resolve(__dirname, "../"));
moduleAlias.addAlias("@config", resolve(__dirname, "../config"));
moduleAlias.addAlias("@middleware", resolve(__dirname, "../middleware"));
moduleAlias.addAlias("@viewHelpers", resolve(__dirname, "../helpers/views"));
moduleAlias.addAlias("@routes", resolve(__dirname, "../routes"));
moduleAlias.addAlias("@views", resolve(__dirname, "../views"));
moduleAlias.addAlias("@models", resolve(__dirname, "../models"));

export default moduleAlias;