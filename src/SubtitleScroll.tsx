import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { SCROLL_SECONDS } from "./constants";

const SPEECH_TEXT = `皆様、本日はご多用のところ、息子カルビンと留里さんの結婚披露宴にご臨席を賜りまして、誠にありがとうございます。

このたびの披露宴を心を込めてご準備くださいました留里さん、そしてお父様、お母様に、心より御礼申し上げます。私自身は一昨日の晩に初めて福岡の地を訪れましたため、ご準備のお手伝いを何一つすることが叶わず、誠に申し訳なく存じます。

カルビンは、私と妻にとって初めての子どもでございます。結婚して間もない頃、私たち夫婦の暮らしに、この子が加わりました。

赤ちゃんの頃から、ひときわ自律心の強い子でございまして、毎朝きっかり六時に目を覚まし、夜は決まって三回ミルクを欲しがるという、なんとも律儀な赤ちゃんでございました。文字を覚える前から、朝起きるとガンダムやウルトラマンを組み立てたり、電車のおもちゃで夢中になって遊んだりしておりました。字が読めるようになってからは、毎朝起きるとすぐに本を開く毎日で、ロケットの専門書からハリー・ポッターまで、あらゆる本を読みあさっておりました。

おかげさまで、息子の勉強について心配したことは一度もなく、大学院を修了したのちにはAppleに入社し、現在に至るまで勤務しております。

強いて悩みを挙げますならば、中学生になった頃にゲームと日本の漫画に夢中になり、親としてはどうにも手の打ちようがございませんでした。ところが、その息子が、漫画を原語で読みたい一心で、独学で日本語を学び始め、ついには日本語能力試験のN1にまで合格してしまったのでございます。そして、その日本語のご縁があったからこそ、今日こうして、誰もが羨むほど美しく聡明な日本人のお嫁さんを、我が家にお迎えすることができました。

小学校の頃から、学校でスペイン語、ドイツ語、フランス語といった言語を学んでまいりましたが、結局のところ、自ら選び取った日本語に勝るものはなかったようでございます。

子は親があってこの世に生まれてまいりますが、私たち親もまた、子があってこそ、これまで知らなかった新しい世界に出会えるのだと、深く感じ入っております。

カルビンは小さい頃から独立心が強く、どんな悩みも自分の胸の内にそっとしまっておく、そんな性格の子でございました。私どももそんな息子の性格を尊重し、これまで彼の選択をすべて見守ってまいりました。それでも、文化や育った環境の異なるお嫁さんを迎えるとなりますと、親として一抹の不安が胸をよぎったのも事実でございます。

そのような中、昨年、留里さんのお父様、お母様が台湾までお越しくださいました。わずか三日間のご滞在ではございましたが、ご一緒に過ごさせていただく中で、お父様の温かく明るく、人と誠実に向き合われるお人柄、そしてお母様の優しくも芯の強いお人柄に、深く触れさせていただきました。お二人がこれまでの人生をかけてご家庭を守り、お子様の夢を支え続けてこられたお姿に、私の心にあった不安は、和らいだのでございます。

我が子が家庭を築き、かつての私たち夫婦と同じように手探りで歩んでいく、その姿を見ておりますと、心からの祝福の気持ちでいっぱいでございます。

カルビン、留里さん。これからの長い人生、晴れの日も雨の日も、どうかお互いを支え合いながら、共に歩んでいってください。今宵、ご臨席の皆様にお見守りいただき、温かなお祝いを賜ったこの日のことを胸に、お二人がさらに励まし合いながら、夫婦としての歩み方を学び、立派な大人へ、そして良き夫、良き妻となっていかれることを、心より願っております。

結びに、お二人の末永いお幸せを心よりお祈り申し上げまして、私のご挨拶とさせていただきます。

本日は誠にありがとうございました。`;

export const SubtitleScroll: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();

  const scrollFrames = SCROLL_SECONDS * fps;
  // Clamp to 1 so scroll stops cleanly; video holds black until it ends
  const progress = Math.min(frame / scrollFrames, 1);

  // Text block padding and estimated rendered height
  const paddingV = 80;
  const lineHeight = 2.0;
  const fontSize = 56;
  const estimatedContentHeight = 4400; // tuned for this text at fontSize 56
  const totalScrollDistance = estimatedContentHeight + height;
  const translateY = height - progress * totalScrollDistance;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          transform: `translateY(${translateY}px)`,
          padding: `${paddingV}px 120px`,
          willChange: "transform",
        }}
      >
        {SPEECH_TEXT.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            style={{
              color: "#ffffff",
              fontSize,
              lineHeight,
              fontFamily:
                '"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif',
              fontWeight: 300,
              letterSpacing: "0.05em",
              marginBottom: "1.8em",
              margin: `0 0 1.8em 0`,
              textAlign: "justify",
              whiteSpace: "pre-wrap",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </AbsoluteFill>
  );
};
