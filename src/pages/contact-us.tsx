import Layout from '@/components/layout';
import { useState } from 'react';

const inputStyles = {
  borderColor: '#504a4861',
  height: '60px',
  width: '100%',
  padding: '0.42em 1.1em',
  color: '#575756',
  // borderColor: '#d4ddde',
  backgroundColor: '#ffffff',
};

const textAreaStyles = {
  padding: '0.42em 1.1em',
  height: '10em',
  width: '100%',
  color: '#575756',
  borderColor: '#d4ddde',
  backgroundColor: '#ffffff',
};

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [agree, setAgree] = useState(true);
  // const disAbleSubmit = true;
  const handleSubmit = ($event: React.FormEvent) => {
    $event.preventDefault();
    if (name == '' || null) {
      return;
    }
    if (agree != false && msg.length >= 10) {
      //  const disAbledSubmit = false;
    }

    alert(`${name} ${email} ${msg}`);
    console.log(name + 'here');
    setName('');
    setEmail('');
    setMsg('');
    setAgree(false);
  };

  return (
    <Layout>
      <div
        style={{
          padding: '8em 4em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: '900px',
          margin: 'auto',
        }}
      >
        {/* <Container> */}
        <div className="">
          <h2 className="text-accent">GET IN TOUCH</h2>
          <h3 className="text-2xl font-bold">CONTACT FORM</h3>
        </div>
        <div>
          <p className="my-4">
            For Quotes, questions, or feedback, Feel free to reach out to us via
            any of the following channnels or using the form below.
          </p>
        </div>
        <div className="mt-3 w-full">
          <form action="#" onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                gap: '15px',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  gap: '15px',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ flexGrow: '1' }}>
                  <label>
                    <input
                      style={inputStyles}
                      type="text"
                      name="name"
                      onChange={(event) => setName(event.target.value)}
                      // value={name}
                      placeholder="YOUR NAME"
                      required
                    />
                  </label>
                </span>

                <span style={{ flexGrow: '1' }}>
                  <label>
                    <input
                      style={inputStyles}
                      type="email"
                      name="_replyto"
                      // onChange={event => setEmail(event.target.value)}
                      // value={email}
                      placeholder="YOUR EMAIL"
                      required
                    />
                  </label>
                </span>
              </span>

              <textarea
                style={textAreaStyles}
                name="msg"
                placeholder="YOUR MESSAGE"
                minLength={10}
                // onChange={event => setMsg(event.target.value)}
                // value={msg}
              ></textarea>
            </div>

            <div className="mt-3">
              <input
                type="checkbox"
                name="agree"
                // onClick={event => setAgree(event.target.value)}
              />
              <span>
                I agree that my submitted data is being collected and stored.
              </span>
            </div>

            <button
              // disabled={agree}
              className="mt-3 bg-accent text-white hover:bg-primary-light"
              style={{ padding: '1.5em 5em', marginTop: '3em' }}
              type="submit"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
