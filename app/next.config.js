/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_RPC_ENDPOINT: process.env.NEXT_PUBLIC_RPC_ENDPOINT,
        NEXT_PUBLIC_PROGRAM_ID: process.env.NEXT_PUBLIC_PROGRAM_ID,
        NEXT_PUBLIC_EQUIP_MINT: process.env.NEXT_PUBLIC_EQUIP_MINT,
    },
    images: {
        unoptimized: true,
        domains: ['arweave.net', 'shdw-drive.genesysgo.net'],
    },
};

module.exports = nextConfig;
