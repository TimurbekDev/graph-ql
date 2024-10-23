export const appConfig =()=>({
    app : {
        port : process.env.APP_PORT,
        host : Number(process.env.APP_HOST)
    }
})