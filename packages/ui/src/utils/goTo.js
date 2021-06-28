export const goTo = (instance, params) => {
    instance.$router.push({
        path: instance.$route.path || "/",
        ...params
    })
}