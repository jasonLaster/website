function Body({ children }) {
  return (
    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      {children}
    </p>
  );
}

function Header({ children }) {
  return (
    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
      {children}
    </h3>
  );
}

function Section({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="lg:text-center">{children}</div>
    </div>
  );
}
function Icon({ children }) {
  return (
    <div
      className="bg-indigo-600 w-10 p-2"
      style={{
        borderRadius: "11px",
        "text-align": "center",
        display: "inline-block",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        {children}
      </svg>
    </div>
  );
}

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <Section>
        <Icon>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </Icon>
        <Header> Record everything</Header>

        <Body>
          We've designed recording to work as easily as your favorite screen
          recorder. But Replay also captures everything at the browser level.
          That means you're not just sending a video, you're sharing context.
        </Body>
      </Section>
      <Section>
        <Icon>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
          />
        </Icon>

        <Header> Fix problems faster</Header>
        <Body>
          Move backward and forward in time to inspect your app's state. Add
          print statements that automagically appear in the console. And it's
          all possible in the browser, using tools you already know and love.
        </Body>
      </Section>
      <Section>
        <Icon>
          <path
            strokeLinecap="rround"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </Icon>
        <Header>File bugs effortlessly</Header>
        <Body>
          Replay captures everything you need for the perfect bug report, all in
          one link. Spend less time reproducing issues and more time getting
          real work done.
        </Body>
      </Section>
    </div>
  );
}

// "say it with a link" sounds great
