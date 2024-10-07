import { findGraphs } from "@dragee-io/type/grapher";

export default {
    namespace: 'template',
    graphs: findGraphs('template', `${import.meta.dir}/src/graphs/`)
}
