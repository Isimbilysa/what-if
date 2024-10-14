import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Login() {
    return (
        <div className="flex items-center flex-col justify-center min-h-screen">
            <h2 className="text-md  mb-4">What If  | Admins Only</h2>
            <div className="bg-white p-10 ">
                <h2 className="text-2xl text-black mb-1">Sign in</h2>
                <h2 className=" mb-4">Welcome back! Login to continue</h2>
                <button
                    className="border-blue-500 border hover:bg-blue-50 text-blue-500  py-3 px-4 w-full rounded-md"
                    onClick={() => signIn('google')}
                >
                    Sign in with Google
                </button>
            </div>
            <Link href="/" className='mt-4 hover:text-blue-500'> Go back home</Link>
        </div>
    );
}
