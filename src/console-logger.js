export default {
    writeLogAsync: async (msg) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(msg);
                resolve(true);
            }, 1000);
        });
    }
};