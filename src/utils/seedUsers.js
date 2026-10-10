import bcrypt from 'bcrypt';
import userRepository from '../repositories/UserRepository.js';
import roleRepository from '../repositories/RoleRepository.js';

export default async function seedUsers() {
    const adminEmail = process.env.ADMIN_SEED_EMAIL;
    const adminPassword = process.env.ADMIN_SEED_PASSWORD;
    if (!adminEmail || !adminPassword) return;
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[#$%&*@]).{8,}$/.test(adminPassword)) {
        throw new Error('ADMIN_SEED_PASSWORD no cumple la política de contraseñas');
    }
    const existingAdmin = await userRepository.findByEmail(adminEmail);
    if (existingAdmin) return;
    let adminRole = await roleRepository.findByName('admin');
    if (!adminRole) adminRole = await roleRepository.create({ name: 'admin' });
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);
    const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);
    await userRepository.create({
        name: 'Admin', lastName: 'Tecsup', email: adminEmail,
        password: hashedPassword, phoneNumber: '999888777',
        birthdate: new Date('1990-01-01'), adress: '', url_profile: '',
        roles: [adminRole._id]
    });
    console.log('Cuenta de administrador inicial creada');
}
