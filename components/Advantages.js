import Image from "next/image";

import AdvantageItem from "./AdvantageItem";
import classes from "./Advantages.module.css";
import onlineImg from "../assets/online-img.png";
import securityImg from "../assets/security-img.png";
import blockchainImg from "../assets/blockchain-img.png";

const Advantages = () => {
  return (
    <div className={classes["home-advantage"]}>
      <h1>Online Voting Features</h1>
      <AdvantageItem>
        <div className={classes["adv-1"]}>
          <Image
            src={onlineImg}
            alt="voting image"
            height="450px"
            width="850px"
          />
        </div>
        <div className={classes["adv-1"]}>
          <h2>Vote From Anywhere</h2>
          <p>
            With our lives increasingly shifting online, it’s only logical that
            voting would transition to a digital platform, too. Although public
            elections have yet to embrace such methods, many private
            organizations have eagerly adopted internet voting, enabling them to
            take advantage of significant benefits
          </p>
        </div>
      </AdvantageItem>
      <AdvantageItem>
        <div className={classes["adv-2"]}>
          <h2>Security</h2>
          <p>
            Nodes on the network participate to ensure that all copies of the
            data distributed across the network are the same. That’s one very
            important reason why we’re building our voting application on the
            blockchain, because we want to ensure that our vote was counted, and
            that it did not change.
          </p>
        </div>
        <div className={classes["adv-2"]}>
          <Image
            src={securityImg}
            alt="voting image"
            height="490px"
            width="900px"
          />
        </div>
      </AdvantageItem>
      <AdvantageItem>
        <div className={classes["adv-3"]}>
          <Image
            src={blockchainImg}
            alt="voting image"
            height="520px"
            width="900px"
          />
        </div>
        <div className={classes["adv-3"]}>
          <h2>Power Of Blockchain</h2>
          <p>
            Blockchain technology is secure as it is decentralised and
            distributed. There is no single point of failure, which makes it
            much harder to corrupt. Hacking into one part of the system cannot
            affect other parts
          </p>
        </div>
      </AdvantageItem>
    </div>
  );
};

export default Advantages;
