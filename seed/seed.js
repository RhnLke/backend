const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const SALT_ROUNDS = 10;
const bcrypt = require("bcrypt")

async function hash(password) {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  }

const load = async () => {
  try {
    await prisma.profiles.create({
      data: {
        firstName: "Rhon Jester",
        lastName: "Lucas",
        address: "Alicia, Isabela",
        userName: "rhon",
        email: "nohrlucas@gmail.com.com",
        password: await hash("0000"),
        phoneNumber: "phoneNumber",
        postCode: "3306",
      },
    });
    console.log("seed added");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
