import mongoose from 'mongoose';

export const config = function(): void {
    const ipMongo = process.env.IP_MONGO || 'localhost';
    const baseMongo = process.env.BASE_MONGO || 'freesoccer';
    const usrMongo = process.env.USR_MONGO;
    const pswMongo = process.env.PSW_MONGO;

    if (usrMongo) {
      mongoose.connect(`mongodb://${usrMongo}:${pswMongo}@${ipMongo}/${baseMongo}`, { useUnifiedTopology: true, useNewUrlParser: true });
    } else {
      mongoose.connect(`mongodb://${ipMongo}/${baseMongo}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    }
}