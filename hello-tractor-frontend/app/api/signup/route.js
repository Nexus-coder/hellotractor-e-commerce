import { verify } from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(req) {
    console.log('this is the signup link');
    let requestData;

    // Validation of req.json() request
    try {
        requestData = await req.json();
        console.log('This is the data in signup', requestData)
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request Body' }, { status: 400 });
    }

    const { name, email, phone, password } = requestData;

    const [first_name, last_name] = name.split(' ');

    console.log(first_name, last_name, password, email)

    const DIRECTUS_URL = process.env.DIRECTUS_URL;

    console.log('the url used', process.env.URL)
    
    if (!DIRECTUS_URL) {
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (!name || !email || !phone) {
        return NextResponse.json({
            error: 'Missing required fields'
        }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({
            error: 'Invalid email format'
        }, { status: 400 });
    }

    const phoneRegex = /^[0-9+-]+$/;
    if (!phoneRegex.test(phone)) {
        return NextResponse.json({
            error: 'Invalid phone format'
        }, { status: 400 });
    }

    try {
        // Create user in Directus
        const registerResponse = await fetch(`${DIRECTUS_URL}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name,
                verification_url: `${process.env.URL}/api/verify`,
            }),
        });

        console.log('This is the register', registerResponse.status)

        if (registerResponse.status === 204) {
            return NextResponse.json({
                message: 'Successfully sent email to login'
            })
        } else {
            return NextResponse.json({
                message: 'Something went wrong'
            })
        }
    }
    catch (error) {
        // console.error('Registration error:', error);
        // return NextResponse.json({ error: error.message }, { status: 500 });
        console.log(e);
        const code = e.errors[0].extensions.code
        if (code === 'RECORD_NOT_UNIQUE') {
            return NextResponse.json({ message: "This user already exist" }, { status: 409 });
        }
        return NextResponse.json({ message: "An unexpected error occurred, please try again" }, { status: 500 });

    }
}
