import healthCheckRoute from "./healthCheck.js";

export default (app)=> {
    app.use('/healthz', healthCheckRoute);
}
