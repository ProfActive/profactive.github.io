import { FunctionComponent } from "react";
import Header from "../../components/Header/Header";

interface DiscordProps {}

const Discord: FunctionComponent<DiscordProps> = () => {
  return (
    <>
      <Header pageName="Discord" caption="Поспілкуємось?" />

      <div
        className="frame-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title=" "
          src="https://discordapp.com/widget?id=1082265135806161016&theme=dark"
          width="350"
          height="500"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          style={{
            marginTop: "100px",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default Discord;
