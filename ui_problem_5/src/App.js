import './App.css';
import { useEffect, useState } from 'react';

const emojiData = [
  {
    "title": "Grinning",
    "symbol": "😀",
    "keywords": "grinning face happy smiley emotion emotion"
  },
  {
    "title": "Grimacing",
    "symbol": "😬",
    "keywords": "grimacing face silly smiley emotion emotion selfie selfie"
  },
  {
    "title": "Grin",
    "symbol": "😁",
    "keywords":
      "grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie"
  },
  {
    "title": "Joy",
    "symbol": "😂",
    "keywords":
      "face with tears of joy happy silly smiley cry laugh laugh emotion emotion sarcastic sarcastic"
  },
  {
    "title": "Smiley",
    "symbol": "😃",
    "keywords":
      "smiling face with open mouth happy smiley emotion emotion good good"
  },
  {
    "title": "Smile",
    "symbol": "😄",
    "keywords":
      "smiling face with open mouth and smiling eyes happy smiley emotion emotion"
  },
  {
    "title": "Sweat Smile",
    "symbol": "😅",
    "keywords":
      "smiling face with open mouth and cold sweat smiley workout sweat emotion emotion"
  },
  {
    "title": "Laughing",
    "symbol": "😆",
    "keywords":
      "smiling face with open mouth and tightly-closed eyes happy smiley laugh laugh emotion emotion"
  },
  {
    "title": "Innocent",
    "symbol": "😇",
    "keywords": "smiling face with halo smiley emotion emotion"
  },
  {
    "title": "Wink",
    "symbol": "😉",
    "keywords": "winking face silly smiley emotion emotion"
  },
  {
    "title": "Blush",
    "symbol": "😊",
    "keywords":
      "smiling face with smiling eyes happy smiley emotion emotion good good beautiful beautiful"
  },
  {
    "title": "Slight Smile",
    "symbol": "🙂",
    "keywords": "slightly smiling face happy smiley"
  },
  {
    "title": "Upside Down",
    "symbol": "🙃",
    "keywords": "upside-down face silly smiley sarcastic sarcastic"
  },
  {
    "title": "Relaxed",
    "symbol": "☺",
    "keywords": "white smiling face happy smiley"
  },
  {
    "title": "Yum",
    "symbol": "😋",
    "keywords":
      "face savouring delicious food happy silly smiley emotion emotion sarcastic sarcastic good good"
  },
  {
    "title": "Relieved",
    "symbol": "😌",
    "keywords": "relieved face smiley emotion emotion"
  },
  {
    "title": "Heart Eyes",
    "symbol": "😍",
    "keywords":
      "smiling face with heart-shaped eyes happy smiley love sex heart eyes emotion emotion beautiful beautiful"
  },
  {
    "title": "Kissing Heart",
    "symbol": "😘",
    "keywords": "face throwing a kiss smiley love sexy"
  },
  {
    "title": "Kissing",
    "symbol": "😗",
    "keywords": "kissing face smiley sexy"
  },
  {
    "title": "Kissing Smiling Eyes",
    "symbol": "😙",
    "keywords": "kissing face with smiling eyes smiley sexy"
  },
  {
    "title": "Kissing Closed Eyes",
    "symbol": "😚",
    "keywords": "kissing face with closed eyes smiley sexy"
  },
  {
    "title": "Stuck Out Tongue Winking Eye",
    "symbol": "😜",
    "keywords":
      "face with stuck-out tongue and winking eye happy smiley emotion emotion parties parties"
  },
  {
    "title": "Stuck Out Tongue Closed Eyes",
    "symbol": "😝",
    "keywords":
      "face with stuck-out tongue and tightly-closed eyes happy smiley emotion emotion"
  },
  {
    "title": "Stuck Out Tongue",
    "symbol": "😛",
    "keywords": "face with stuck-out tongue smiley sex emotion emotion"
  },
  {
    "title": "Money Mouth",
    "symbol": "🤑",
    "keywords":
      "money-mouth face smiley win win money money emotion emotion boys night boys night"
  },
  {
    "title": "Nerd",
    "symbol": "🤓",
    "keywords": "nerd face smiley glasses"
  },
  {
    "title": "Sunglasses",
    "symbol": "😎",
    "keywords":
      "smiling face with sunglasses silly smiley emojione glasses boys night boys night"
  },
  {
    "title": "Hugging",
    "symbol": "🤗",
    "keywords": "hugging face smiley hug thank you"
  },
  {
    "title": "Smirk",
    "symbol": "😏",
    "keywords": "smirking face silly smiley sexy sarcastic sarcastic"
  },
  {
    "title": "No Mouth",
    "symbol": "😶",
    "keywords": "face without mouth mad smiley neutral emotion emotion"
  },
  {
    "title": "Neutral Face",
    "symbol": "😐",
    "keywords": "neutral face mad smiley shrug neutral emotion emotion"
  },
  {
    "title": "Expressionless",
    "symbol": "😑",
    "keywords": "expressionless face mad smiley neutral emotion emotion"
  },
  {
    "title": "Unamused",
    "symbol": "😒",
    "keywords": "unamused face sad mad smiley tired emotion emotion"
  },
  {
    "title": "Rolling Eyes",
    "symbol": "🙄",
    "keywords":
      "face with rolling eyes mad smiley rolling eyes emotion emotion sarcastic sarcastic"
  },
  {
    "title": "Thinking",
    "symbol": "🤔",
    "keywords": "thinking face smiley thinking boys night boys night"
  },
  {
    "title": "Flushed",
    "symbol": "😳",
    "keywords": "flushed face smiley emotion emotion omg omg"
  },
  {
    "title": "Disappointed",
    "symbol": "😞",
    "keywords": "disappointed face sad smiley tired emotion emotion"
  },
  {
    "title": "Worried",
    "symbol": "😟",
    "keywords": "worried face sad smiley emotion emotion"
  },
  {
    "title": "Angry",
    "symbol": "😠",
    "keywords": "angry face mad smiley emotion emotion"
  },
  {
    "title": "Rage",
    "symbol": "😡",
    "keywords": "pouting face mad smiley angry emotion emotion"
  },
  {
    "title": "Pensive",
    "symbol": "😔",
    "keywords": "pensive face sad smiley emotion emotion rip rip"
  },
  {
    "title": "Confused",
    "symbol": "😕",
    "keywords": "confused face smiley surprised emotion emotion"
  },
  {
    "title": "Slight Frown",
    "symbol": "🙁",
    "keywords": "slightly frowning face sad smiley emotion emotion"
  },
  {
    "title": "Frowning2",
    "symbol": "☹",
    "keywords": "white frowning face sad smiley emotion emotion"
  },
  {
    "title": "Persevere",
    "symbol": "😣",
    "keywords": "persevering face sad smiley angry emotion emotion"
  },
  {
    "title": "Confounded",
    "symbol": "😖",
    "keywords": "confounded face sad smiley angry emotion emotion"
  },
  {
    "title": "Tired Face",
    "symbol": "😫",
    "keywords": "tired face sad smiley tired emotion emotion"
  },
  {
    "title": "Weary",
    "symbol": "😩",
    "keywords": "weary face sad smiley tired stressed emotion emotion"
  },
  {
    "title": "Triumph",
    "symbol": "😤",
    "keywords":
      "face with look of triumph mad smiley angry emotion emotion steam steam"
  },
  {
    "title": "Open Mouth",
    "symbol": "😮",
    "keywords": "face with open mouth smiley surprised wow wow emotion emotion"
  },
  {
    "title": "Scream",
    "symbol": "😱",
    "keywords":
      "face screaming in fear smiley surprised wow wow emotion emotion omg omg"
  },
  {
    "title": "Fearful",
    "symbol": "😨",
    "keywords": "fearful face smiley surprised emotion emotion"
  },
  {
    "title": "Cold Sweat",
    "symbol": "😰",
    "keywords":
      "face with open mouth and cold sweat smiley sweat emotion emotion"
  },
  {
    "title": "Hushed",
    "symbol": "😯",
    "keywords": "hushed face smiley surprised wow wow"
  },
  {
    "title": "Frowning",
    "symbol": "😦",
    "keywords":
      "frowning face with open mouth sad smiley surprised emotion emotion"
  },
  {
    "title": "Anguished",
    "symbol": "😧",
    "keywords": "anguished face sad smiley surprised emotion emotion"
  },
  {
    "title": "Cry",
    "symbol": "😢",
    "keywords":
      "crying face sad smiley cry emotion emotion rip rip heartbreak heartbreak"
  },
  {
    "title": "Disappointed Relieved",
    "symbol": "😥",
    "keywords":
      "disappointed but relieved face sad smiley stressed sweat cry emotion emotion"
  },
  {
    "title": "Sleepy",
    "symbol": "😪",
    "keywords": "sleepy face smiley sick emotion emotion"
  },
  {
    "title": "Sweat",
    "symbol": "😓",
    "keywords": "face with cold sweat sad smiley stressed sweat emotion emotion"
  },
  {
    "title": "Sob",
    "symbol": "😭",
    "keywords":
      "loudly crying face sad smiley cry emotion emotion heartbreak heartbreak"
  },
  {
    "title": "Dizzy Face",
    "symbol": "😵",
    "keywords":
      "dizzy face smiley surprised dead wow wow emotion emotion omg omg"
  },
  {
    "title": "Astonished",
    "symbol": "😲",
    "keywords":
      "astonished face smiley surprised wow wow emotion emotion omg omg"
  },
  {
    "title": "Zipper Mouth",
    "symbol": "🤐",
    "keywords": "zipper-mouth face mad smiley"
  },
  {
    "title": "Mask",
    "symbol": "😷",
    "keywords": "face with medical mask smiley dead health sick"
  },
  {
    "title": "Thermometer Face",
    "symbol": "🤒",
    "keywords": "face with thermometer smiley health sick emotion emotion"
  },
  {
    "title": "Head Bandage",
    "symbol": "🤕",
    "keywords": "face with head-bandage smiley health sick emotion emotion"
  },
  {
    "title": "Sleeping",
    "symbol": "😴",
    "keywords": "sleeping face smiley tired emotion emotion goodnight goodnight"
  },
  {
    "title": "Zzz",
    "symbol": "💤",
    "keywords": "sleeping symbol tired goodnight goodnight"
  },
  {
    "title": "Poop",
    "symbol": "💩",
    "keywords": "pile of poo bathroom shit sol sol diarrhea diarrhea"
  },
  {
    "title": "Smiling Imp",
    "symbol": "😈",
    "keywords":
      "smiling face with horns silly smiley angry monster devil devil boys night boys night"
  },
  {
    "title": "Imp",
    "symbol": "👿",
    "keywords": "imp smiley monster devil devil wth wth"
  },
  {
    "title": "Japanese Ogre",
    "symbol": "👹",
    "keywords": "japanese ogre monster"
  },
  {
    "title": "Japanese Goblin",
    "symbol": "👺",
    "keywords": "japanese goblin angry monster"
  },
  {
    "title": "Skull",
    "symbol": "💀",
    "keywords": "skull dead halloween skull"
  },
  {
    "title": "Ghost",
    "symbol": "👻",
    "keywords": "ghost holidays halloween monster"
  },
  {
    "title": "Alien",
    "symbol": "👽",
    "keywords":
      "extraterrestrial alien space monster alien scientology scientology"
  },
  {
    "title": "Robot",
    "symbol": "🤖",
    "keywords": "robot face monster robot"
  },
  {
    "title": "Smiley Cat",
    "symbol": "😺",
    "keywords": "smiling cat face with open mouth happy cat cat animal animal"
  },
  {
    "title": "Smile Cat",
    "symbol": "😸",
    "keywords":
      "grinning cat face with smiling eyes happy cat cat animal animal"
  },
  {
    "title": "Joy Cat",
    "symbol": "😹",
    "keywords":
      "cat face with tears of joy happy silly cry laugh laugh cat cat animal animal sarcastic sarcastic"
  },
  {
    "title": "Heart Eyes Cat",
    "symbol": "😻",
    "keywords":
      "smiling cat face with heart-shaped eyes heart eyes cat cat animal animal beautiful beautiful"
  },
  {
    "title": "Smirk Cat",
    "symbol": "😼",
    "keywords": "cat face with wry smile cat cat animal animal"
  },
  {
    "title": "Kissing Cat",
    "symbol": "😽",
    "keywords": "kissing cat face with closed eyes cat cat animal animal"
  },
  {
    "title": "Scream Cat",
    "symbol": "🙀",
    "keywords": "weary cat face cat cat animal animal"
  },
  {
    "title": "Crying Cat Face",
    "symbol": "😿",
    "keywords": "crying cat face cry cat cat animal animal"
  },
  {
    "title": "Pouting Cat",
    "symbol": "😾",
    "keywords": "pouting cat face cat cat animal animal"
  },
  {
    "title": "Raised Hands",
    "symbol": "🙌",
    "keywords":
      "person raising both hands in celebration body hands diversity diversity perfect perfect good good parties parties"
  },
  {
    "title": "Clap",
    "symbol": "👏",
    "keywords":
      "clapping hands sign body hands win win diversity diversity good good beautiful beautiful"
  },
  {
    "title": "Wave",
    "symbol": "👋",
    "keywords": "waving hand sign body hands hi diversity diversity"
  },
  {
    "title": "Thumbsup",
    "symbol": "👍",
    "keywords":
      "thumbs up sign body hands hi luck thank you diversity diversity perfect perfect good good beautiful beautiful"
  },
  {
    "title": "Thumbsdown",
    "symbol": "👎",
    "keywords": "thumbs down sign body hands diversity diversity"
  },
  {
    "title": "Punch",
    "symbol": "👊",
    "keywords":
      "fisted hand sign body hands hi fist bump diversity diversity boys night boys night"
  },
  {
    "title": "Fist",
    "symbol": "✊",
    "keywords":
      "raised fist body hands hi fist bump diversity diversity condolence condolence"
  },
  {
    "title": "v",
    "symbol": "✌",
    "keywords":
      "victory hand body hands hi thank you peace peace diversity diversity girls night girls night"
  },
  {
    "title": "Ok Hand",
    "symbol": "👌",
    "keywords":
      "ok hand sign body hands hi diversity diversity perfect perfect good good beautiful beautiful"
  },
  {
    "title": "Raised Hand",
    "symbol": "✋",
    "keywords":
      "raised hand body hands hi diversity diversity girls night girls night"
  },
  {
    "title": "Open Hands",
    "symbol": "👐",
    "keywords":
      "open hands sign body hands diversity diversity condolence condolence"
  },
  {
    "title": "Muscle",
    "symbol": "💪",
    "keywords":
      "flexed biceps body hands workout flex win win diversity diversity feminist feminist boys night boys night"
  },
  {
    "title": "Pray",
    "symbol": "🙏",
    "keywords":
      "person with folded hands body hands hi luck thank you pray pray diversity diversity scientology scientology"
  },
  {
    "title": "Point Up",
    "symbol": "☝",
    "keywords":
      "white up pointing index body hands emojione diversity diversity"
  },
  {
    "title": "Point Up 2",
    "symbol": "👆",
    "keywords":
      "white up pointing backhand index body hands diversity diversity"
  },
  {
    "title": "Point Down",
    "symbol": "👇",
    "keywords":
      "white down pointing backhand index body hands diversity diversity"
  },
  {
    "title": "Point Left",
    "symbol": "👈",
    "keywords":
      "white left pointing backhand index body hands hi diversity diversity"
  },
  {
    "title": "Point Right",
    "symbol": "👉",
    "keywords":
      "white right pointing backhand index body hands hi diversity diversity"
  },
  {
    "title": "Middle Finger",
    "symbol": "🖕",
    "keywords":
      "reversed hand with middle finger extended body hands middle finger diversity diversity"
  },
  {
    "title": "Hand Splayed",
    "symbol": "🖐",
    "keywords":
      "raised hand with fingers splayed body hands hi diversity diversity"
  },
  {
    "title": "Metal",
    "symbol": "🤘",
    "keywords":
      "sign of the horns body hands hi diversity diversity boys night boys night parties parties"
  },
  {
    "title": "Vulcan",
    "symbol": "🖖",
    "keywords":
      "raised hand with part between middle and ring fingers body hands hi diversity diversity"
  },
  {
    "title": "Writing Hand",
    "symbol": "✍",
    "keywords": "writing hand body hands write diversity diversity"
  },
  {
    "title": "Nail Care",
    "symbol": "💅",
    "keywords":
      "nail polish women body hands nailpolish diversity diversity girls night girls night"
  },
  {
    "title": "Lips",
    "symbol": "👄",
    "keywords": "mouth women body sexy lip"
  },
  {
    "title": "Tongue",
    "symbol": "👅",
    "keywords": "tongue body sexy lip"
  },
  {
    "title": "Ear",
    "symbol": "👂",
    "keywords": "ear body diversity diversity"
  },
  {
    "title": "Nose",
    "symbol": "👃",
    "keywords": "nose body diversity diversity"
  },
  {
    "title": "Eye",
    "symbol": "👁",
    "keywords": "eye body eyes"
  },
  {
    "title": "Eyes",
    "symbol": "👀",
    "keywords": "eyes body eyes"
  },
  {
    "title": "Bust In Silhouette",
    "symbol": "👤",
    "keywords": "bust in silhouette people"
  },
  {
    "title": "Busts In Silhouette",
    "symbol": "👥",
    "keywords": "busts in silhouette people"
  },
  {
    "title": "Speaking Head",
    "symbol": "🗣",
    "keywords": "speaking head in silhouette people talk"
  },
  {
    "title": "Baby",
    "symbol": "👶",
    "keywords": "baby people baby diversity diversity"
  },
  {
    "title": "Boy",
    "symbol": "👦",
    "keywords": "boy people baby diversity diversity"
  },
  {
    "title": "Girl",
    "symbol": "👧",
    "keywords": "girl people women baby diversity diversity"
  },
  {
    "title": "Man",
    "symbol": "👨",
    "keywords":
      "man people men sex diversity diversity selfie selfie boys night boys night"
  },
  {
    "title": "Woman",
    "symbol": "👩",
    "keywords":
      "woman people women sex diversity diversity feminist feminist selfie selfie girls night girls night"
  },
  {
    "title": "Person With Blond Hair",
    "symbol": "👱",
    "keywords": "person with blond hair people men diversity diversity"
  },
  {
    "title": "Older Man",
    "symbol": "👴",
    "keywords": "older man people men old people diversity diversity"
  },
  {
    "title": "Older Woman",
    "symbol": "👵",
    "keywords": "older woman people old people diversity diversity"
  },
  {
    "title": "Man With Gua Pi Mao",
    "symbol": "👲",
    "keywords": "man with gua pi mao people hat men diversity diversity"
  },
  {
    "title": "Man With Turban",
    "symbol": "👳",
    "keywords": "man with turban people hat diversity diversity"
  },
  {
    "title": "Cop",
    "symbol": "👮",
    "keywords":
      "police officer people hat men diversity diversity job job police police 911 911"
  },
  {
    "title": "Construction Worker",
    "symbol": "👷",
    "keywords": "construction worker people hat men diversity diversity job job"
  },
  {
    "title": "Guardsman",
    "symbol": "💂",
    "keywords": "guardsman people hat men diversity diversity job job"
  },
  {
    "title": "Spy",
    "symbol": "🕵",
    "keywords":
      "sleuth or spy people hat men glasses diversity diversity job job"
  },
  {
    "title": "Santa",
    "symbol": "🎅",
    "keywords":
      "father christmas people hat winter holidays christmas diversity diversity santa santa"
  },
  {
    "title": "Angel",
    "symbol": "👼",
    "keywords": "baby angel people diversity diversity omg omg"
  },
  {
    "title": "Princess",
    "symbol": "👸",
    "keywords":
      "princess people women diversity diversity beautiful beautiful girls night girls night"
  },
  {
    "title": "Bride With Veil",
    "symbol": "👰",
    "keywords": "bride with veil people wedding women diversity diversity"
  },
  {
    "title": "Walking",
    "symbol": "🚶",
    "keywords": "pedestrian people men diversity diversity"
  },
  {
    "title": "Runner",
    "symbol": "🏃",
    "keywords":
      "runner people men diversity diversity boys night boys night run run"
  },
  {
    "title": "Dancer",
    "symbol": "💃",
    "keywords":
      "dancer people women sexy diversity diversity girls night girls night dance dance"
  },
  {
    "title": "Dancers",
    "symbol": "👯",
    "keywords":
      "woman with bunny ears people women sexy girls night girls night boys night boys night parties parties dance dance"
  },
  {
    "title": "Couple",
    "symbol": "👫",
    "keywords": "man and woman holding hands people sex creationism creationism"
  },
  {
    "title": "Two Men Holding Hands",
    "symbol": "👬",
    "keywords": "two men holding hands people gay men sex lgbt lgbt"
  },
  {
    "title": "Two Women Holding Hands",
    "symbol": "👭",
    "keywords":
      "two women holding hands people women sex lgbt lgbt lesbian lesbian girls night girls night"
  },
  {
    "title": "Bow",
    "symbol": "🙇",
    "keywords": "person bowing deeply people pray pray diversity diversity"
  },
  {
    "title": "Information Desk Person",
    "symbol": "💁",
    "keywords": "information desk person people women diversity diversity"
  },
  {
    "title": "No Good",
    "symbol": "🙅",
    "keywords":
      "face with no good gesture people women diversity diversity girls night girls night"
  },
  {
    "title": "Ok Woman",
    "symbol": "🙆",
    "keywords": "face with ok gesture people women diversity diversity"
  },
  {
    "title": "Raising Hand",
    "symbol": "🙋",
    "keywords": "happy person raising one hand people women diversity diversity"
  },
  {
    "title": "Person With Pouting Face",
    "symbol": "🙎",
    "keywords": "person with pouting face people women diversity diversity"
  },
  {
    "title": "Person Frowning",
    "symbol": "🙍",
    "keywords": "person frowning people women diversity diversity"
  },
  {
    "title": "Haircut",
    "symbol": "💇",
    "keywords": "haircut people women diversity diversity"
  },
  {
    "title": "Massage",
    "symbol": "💆",
    "keywords": "face massage people women diversity diversity"
  },
  {
    "title": "Couple With Heart",
    "symbol": "💑",
    "keywords": "couple with heart people love sex"
  },
  {
    "title": "Couple Ww",
    "symbol": "👩",
    "keywords": "couple (woman,woman) people women love sex lgbt lgbt"
  },
  {
    "title": "Couple Mm",
    "symbol": "👨",
    "keywords": "couple (man,man) people gay men love sex lgbt lgbt"
  },
  {
    "title": "Couplekiss",
    "symbol": "💏",
    "keywords": "kiss people love sex"
  },
  {
    "title": "Kiss Ww",
    "symbol": "👩",
    "keywords":
      "kiss (woman,woman) people women love sex lgbt lgbt lesbian lesbian"
  },
  {
    "title": "Kiss Mm",
    "symbol": "👨",
    "keywords": "kiss (man,man) people gay men love sex lgbt lgbt"
  },
  {
    "title": "Family",
    "symbol": "👪",
    "keywords": "family people family baby"
  },
  {
    "title": "Family Mwg",
    "symbol": "👨",
    "keywords": "family (man,woman,girl) people family baby"
  },
  {
    "title": "Family Mwgb",
    "symbol": "👨",
    "keywords": "family (man,woman,girl,boy) people family baby"
  },
  {
    "title": "Family Mwbb",
    "symbol": "👨",
    "keywords": "family (man,woman,boy,boy) people family baby"
  },
  {
    "title": "Family Mwgg",
    "symbol": "👨",
    "keywords": "family (man,woman,girl,girl) people family baby"
  },
  {
    "title": "Family Wwb",
    "symbol": "👩",
    "keywords":
      "family (woman,woman,boy) people family women baby lgbt lgbt lesbian lesbian"
  },
  {
    "title": "Family Wwg",
    "symbol": "👩",
    "keywords":
      "family (woman,woman,girl) people family women baby lgbt lgbt lesbian lesbian"
  },
  {
    "title": "Family Wwgb",
    "symbol": "👩",
    "keywords":
      "family (woman,woman,girl,boy) people family women baby lgbt lgbt lesbian lesbian"
  },
  {
    "title": "Family Wwbb",
    "symbol": "👩",
    "keywords":
      "family (woman,woman,boy,boy) people family women baby lgbt lgbt lesbian lesbian"
  },
  {
    "title": "Family Wwgg",
    "symbol": "👩",
    "keywords":
      "family (woman,woman,girl,girl) people family women baby lgbt lgbt lesbian lesbian"
  },
  {
    "title": "Family Mmb",
    "symbol": "👨",
    "keywords": "family (man,man,boy) people gay family men baby lgbt lgbt"
  },
  {
    "title": "Family Mmg",
    "symbol": "👨",
    "keywords": "family (man,man,girl) people gay family men baby lgbt lgbt"
  },
  {
    "title": "Family Mmgb",
    "symbol": "👨",
    "keywords": "family (man,man,girl,boy) people gay family men baby lgbt lgbt"
  },
  {
    "title": "Family Mmbb",
    "symbol": "👨",
    "keywords": "family (man,man,boy,boy) people gay family men baby lgbt lgbt"
  },
  {
    "title": "Family Mmgg",
    "symbol": "👨",
    "keywords":
      "family (man,man,girl,girl) people gay family men baby lgbt lgbt"
  },
  {
    "title": "Womans Clothes",
    "symbol": "👚",
    "keywords": "womans clothes women fashion"
  },
  {
    "title": "Shirt",
    "symbol": "👕",
    "keywords": "t-shirt fashion"
  },
  {
    "title": "Jeans",
    "symbol": "👖",
    "keywords": "jeans fashion"
  },
  {
    "title": "Necktie",
    "symbol": "👔",
    "keywords": "necktie fashion"
  },
  {
    "title": "Dress",
    "symbol": "👗",
    "keywords": "dress women fashion sexy girls night girls night"
  },
  {
    "title": "Bikini",
    "symbol": "👙",
    "keywords": "bikini women fashion sexy vacation tropical swim"
  },
  {
    "title": "Kimono",
    "symbol": "👘",
    "keywords": "kimono fashion"
  },
  {
    "title": "Lipstick",
    "symbol": "💄",
    "keywords": "lipstick object women fashion sexy lip"
  },
  {
    "title": "Kiss",
    "symbol": "💋",
    "keywords":
      "kiss mark women love sexy lip beautiful beautiful girls night girls night"
  },
  {
    "title": "Footprints",
    "symbol": "👣",
    "keywords": "footprints"
  },
  {
    "title": "High Heel",
    "symbol": "👠",
    "keywords":
      "high-heeled shoe women fashion shoe sexy accessories girls night girls night"
  },
  {
    "title": "Sandal",
    "symbol": "👡",
    "keywords": "womans sandal fashion shoe accessories"
  },
  {
    "title": "Boot",
    "symbol": "👢",
    "keywords": "womans boots women fashion shoe sexy accessories"
  },
  {
    "title": "Mans Shoe",
    "symbol": "👞",
    "keywords": "mans shoe fashion shoe accessories"
  },
  {
    "title": "Athletic Shoe",
    "symbol": "👟",
    "keywords": "athletic shoe fashion shoe accessories boys night boys night"
  },
  {
    "title": "Womans Hat",
    "symbol": "👒",
    "keywords": "womans hat women fashion accessories"
  },
  {
    "title": "Tophat",
    "symbol": "🎩",
    "keywords": "top hat hat fashion accessories"
  },
  {
    "title": "Helmet With Cross",
    "symbol": "⛑",
    "keywords": "helmet with white cross object hat accessories job job"
  },
  {
    "title": "Mortar Board",
    "symbol": "🎓",
    "keywords": "graduation cap hat office accessories"
  },
  {
    "title": "Crown",
    "symbol": "👑",
    "keywords": "crown object gem accessories"
  },
  {
    "title": "School Satchel",
    "symbol": "🎒",
    "keywords": "school satchel bag fashion office vacation accessories"
  },
  {
    "title": "Pouch",
    "symbol": "👝",
    "keywords": "pouch bag women fashion accessories"
  },
  {
    "title": "Purse",
    "symbol": "👛",
    "keywords": "purse bag women fashion accessories money money"
  },
  {
    "title": "Handbag",
    "symbol": "👜",
    "keywords": "handbag bag women fashion vacation accessories"
  },
  {
    "title": "Briefcase",
    "symbol": "💼",
    "keywords": "briefcase bag work accessories nutcase nutcase job job"
  },
  {
    "title": "Eyeglasses",
    "symbol": "👓",
    "keywords": "eyeglasses fashion glasses accessories"
  },
  {
    "title": "Dark Sunglasses",
    "symbol": "🕶",
    "keywords": "dark sunglasses fashion glasses accessories"
  },
  {
    "title": "Ring",
    "symbol": "💍",
    "keywords": "ring wedding object fashion gem accessories"
  },
  {
    "title": "Closed Umbrella",
    "symbol": "🌂",
    "keywords": "closed umbrella object sky rain accessories"
  },
  {
    "title": "Dog",
    "symbol": "🐶",
    "keywords": "dog face dog dog pug pug animal animal"
  },
  {
    "title": "Cat",
    "symbol": "🐱",
    "keywords": "cat face halloween vagina cat cat animal animal"
  },
  {
    "title": "Mouse",
    "symbol": "🐭",
    "keywords": "mouse face animal animal"
  },
  {
    "title": "Hamster",
    "symbol": "🐹",
    "keywords": "hamster face animal animal"
  },
  {
    "title": "Rabbit",
    "symbol": "🐰",
    "keywords": "rabbit face wildlife animal animal"
  },
  {
    "title": "Bear",
    "symbol": "🐻",
    "keywords": "bear face wildlife roar animal animal"
  },
  {
    "title": "Panda Face",
    "symbol": "🐼",
    "keywords": "panda face wildlife roar animal animal"
  },
  {
    "title": "Koala",
    "symbol": "🐨",
    "keywords": "koala wildlife animal animal"
  },
  {
    "title": "Tiger",
    "symbol": "🐯",
    "keywords": "tiger face wildlife roar cat cat animal animal"
  },
  {
    "title": "Lion Face",
    "symbol": "🦁",
    "keywords": "lion face wildlife roar cat cat animal animal"
  },
  {
    "title": "Cow",
    "symbol": "🐮",
    "keywords": "cow face animal animal"
  },
  {
    "title": "Pig",
    "symbol": "🐷",
    "keywords": "pig face animal animal"
  },
  {
    "title": "Pig Nose",
    "symbol": "🐽",
    "keywords": "pig nose animal animal"
  },
  {
    "title": "Frog",
    "symbol": "🐸",
    "keywords": "frog face wildlife animal animal"
  },
  {
    "title": "Octopus",
    "symbol": "🐙",
    "keywords": "octopus wildlife animal animal"
  },
  {
    "title": "Monkey Face",
    "symbol": "🐵",
    "keywords": "monkey face animal animal"
  },
  {
    "title": "See No Evil",
    "symbol": "🙈",
    "keywords": "see-no-evil monkey animal animal"
  },
  {
    "title": "Hear No Evil",
    "symbol": "🙉",
    "keywords": "hear-no-evil monkey animal animal"
  },
  {
    "title": "Speak No Evil",
    "symbol": "🙊",
    "keywords": "speak-no-evil monkey animal animal"
  },
  {
    "title": "Monkey",
    "symbol": "🐒",
    "keywords": "monkey wildlife animal animal"
  },
  {
    "title": "Chicken",
    "symbol": "🐔",
    "keywords": "chicken animal animal chicken chicken"
  },
  {
    "title": "Penguin",
    "symbol": "🐧",
    "keywords": "penguin wildlife animal animal"
  },
  {
    "title": "Bird",
    "symbol": "🐦",
    "keywords": "bird wildlife animal animal"
  },
  {
    "title": "Baby Chick",
    "symbol": "🐤",
    "keywords": "baby chick animal animal chicken chicken"
  },
  {
    "title": "Hatching Chick",
    "symbol": "🐣",
    "keywords": "hatching chick animal animal chicken chicken"
  },
  {
    "title": "Hatched Chick",
    "symbol": "🐥",
    "keywords": "front-facing baby chick animal animal chicken chicken"
  },
  {
    "title": "Wolf",
    "symbol": "🐺",
    "keywords": "wolf face wildlife roar animal animal"
  },
  {
    "title": "Boar",
    "symbol": "🐗",
    "keywords": "boar wildlife animal animal"
  },
  {
    "title": "Horse",
    "symbol": "🐴",
    "keywords": "horse face wildlife animal animal"
  },
  {
    "title": "Unicorn",
    "symbol": "🦄",
    "keywords": "unicorn face animal animal"
  },
  {
    "title": "Bee",
    "symbol": "🐝",
    "keywords": "honeybee insects animal animal"
  },
  {
    "title": "Bug",
    "symbol": "🐛",
    "keywords": "bug insects animal animal"
  },
  {
    "title": "Snail",
    "symbol": "🐌",
    "keywords": "snail insects animal animal"
  },
  {
    "title": "Beetle",
    "symbol": "🐞",
    "keywords": "lady beetle insects animal animal"
  },
  {
    "title": "Ant",
    "symbol": "🐜",
    "keywords": "ant insects animal animal"
  },
  {
    "title": "Spider",
    "symbol": "🕷",
    "keywords": "spider insects halloween animal animal"
  },
  {
    "title": "Scorpion",
    "symbol": "🦂",
    "keywords": "scorpion insects reptile reptile animal animal"
  },
  {
    "title": "Crab",
    "symbol": "🦀",
    "keywords": "crab tropical animal animal"
  },
  {
    "title": "Snake",
    "symbol": "🐍",
    "keywords":
      "snake wildlife reptile reptile animal animal creationism creationism"
  },
  {
    "title": "Turtle",
    "symbol": "🐢",
    "keywords": "turtle wildlife reptile reptile animal animal"
  },
  {
    "title": "Tropical Fish",
    "symbol": "🐠",
    "keywords": "tropical fish wildlife animal animal"
  },
  {
    "title": "Fish",
    "symbol": "🐟",
    "keywords": "fish wildlife animal animal"
  },
  {
    "title": "Blowfish",
    "symbol": "🐡",
    "keywords": "blowfish wildlife animal animal"
  },
  {
    "title": "Dolphin",
    "symbol": "🐬",
    "keywords": "dolphin wildlife tropical animal animal"
  },
  {
    "title": "Whale",
    "symbol": "🐳",
    "keywords": "spouting whale wildlife tropical whales whales animal animal"
  },
  {
    "title": "Whale2",
    "symbol": "🐋",
    "keywords": "whale wildlife tropical whales whales animal animal"
  },
  {
    "title": "Crocodile",
    "symbol": "🐊",
    "keywords": "crocodile wildlife reptile reptile animal animal"
  },
  {
    "title": "Leopard",
    "symbol": "🐆",
    "keywords": "leopard wildlife roar animal animal"
  },
  {
    "title": "Tiger2",
    "symbol": "🐅",
    "keywords": "tiger wildlife roar animal animal"
  },
  {
    "title": "Water Buffalo",
    "symbol": "🐃",
    "keywords": "water buffalo wildlife animal animal"
  },
  {
    "title": "Ox",
    "symbol": "🐂",
    "keywords": "ox animal animal"
  },
  {
    "title": "Cow2",
    "symbol": "🐄",
    "keywords": "cow animal animal"
  },
  {
    "title": "Dromedary Camel",
    "symbol": "🐪",
    "keywords": "dromedary camel wildlife animal animal"
  },
  {
    "title": "Camel",
    "symbol": "🐫",
    "keywords": "bactrian camel wildlife animal animal hump day hump day"
  },
  {
    "title": "Elephant",
    "symbol": "🐘",
    "keywords": "elephant wildlife animal animal"
  },
  {
    "title": "Goat",
    "symbol": "🐐",
    "keywords": "goat animal animal"
  },
  {
    "title": "Ram",
    "symbol": "🐏",
    "keywords": "ram wildlife animal animal"
  },
  {
    "title": "Sheep",
    "symbol": "🐑",
    "keywords": "sheep animal animal"
  },
  {
    "title": "Racehorse",
    "symbol": "🐎",
    "keywords": "horse wildlife animal animal"
  },
  {
    "title": "Pig2",
    "symbol": "🐖",
    "keywords": "pig animal animal"
  },
  {
    "title": "Rat",
    "symbol": "🐀",
    "keywords": "rat animal animal"
  },
  {
    "title": "Mouse2",
    "symbol": "🐁",
    "keywords": "mouse animal animal"
  },
  {
    "title": "Rooster",
    "symbol": "🐓",
    "keywords": "rooster animal animal"
  },
  {
    "title": "Turkey",
    "symbol": "🦃",
    "keywords": "turkey wildlife animal animal"
  },
  {
    "title": "Dove",
    "symbol": "🕊",
    "keywords": "dove of peace animal animal"
  },
  {
    "title": "Dog2",
    "symbol": "🐕",
    "keywords": "dog dog dog pug pug animal animal"
  },
  {
    "title": "Poodle",
    "symbol": "🐩",
    "keywords": "poodle dog dog animal animal"
  },
  {
    "title": "Cat2",
    "symbol": "🐈",
    "keywords": "cat halloween cat cat animal animal"
  },
  {
    "title": "Rabbit2",
    "symbol": "🐇",
    "keywords": "rabbit wildlife animal animal"
  },
  {
    "title": "Chipmunk",
    "symbol": "🐿",
    "keywords": "chipmunk wildlife animal animal"
  },
  {
    "title": "Feet",
    "symbol": "🐾",
    "keywords": "paw prints animal animal"
  },
  {
    "title": "Dragon",
    "symbol": "🐉",
    "keywords": "dragon roar reptile reptile animal animal"
  },
  {
    "title": "Dragon Face",
    "symbol": "🐲",
    "keywords": "dragon face roar monster reptile reptile animal animal"
  },
  {
    "title": "Cactus",
    "symbol": "🌵",
    "keywords": "cactus nature plant trees trees"
  },
  {
    "title": "Christmas Tree",
    "symbol": "🎄",
    "keywords": "christmas tree plant holidays christmas trees trees"
  },
  {
    "title": "Evergreen Tree",
    "symbol": "🌲",
    "keywords":
      "evergreen tree nature plant holidays christmas camp trees trees"
  },
  {
    "title": "Deciduous Tree",
    "symbol": "🌳",
    "keywords": "deciduous tree nature plant camp trees trees"
  },
  {
    "title": "Palm Tree",
    "symbol": "🌴",
    "keywords": "palm tree nature plant tropical trees trees"
  },
  {
    "title": "Seedling",
    "symbol": "🌱",
    "keywords": "seedling nature plant leaf leaf"
  },
  {
    "title": "Herb",
    "symbol": "🌿",
    "keywords": "herb nature plant leaf leaf"
  },
  {
    "title": "Shamrock",
    "symbol": "☘",
    "keywords": "shamrock nature plant luck leaf leaf"
  },
  {
    "title": "Four Leaf Clover",
    "symbol": "🍀",
    "keywords": "four leaf clover nature plant luck leaf leaf sol sol"
  },
  {
    "title": "Bamboo",
    "symbol": "🎍",
    "keywords": "pine decoration nature plant"
  },
  {
    "title": "Tanabata Tree",
    "symbol": "🎋",
    "keywords": "tanabata tree nature plant trees trees"
  },
  {
    "title": "Leaves",
    "symbol": "🍃",
    "keywords": "leaf fluttering in wind nature plant leaf leaf"
  },
  {
    "title": "Fallen Leaf",
    "symbol": "🍂",
    "keywords": "fallen leaf nature plant leaf leaf"
  },
  {
    "title": "Maple Leaf",
    "symbol": "🍁",
    "keywords": "maple leaf nature plant leaf leaf"
  },
  {
    "title": "Ear Of Rice",
    "symbol": "🌾",
    "keywords": "ear of rice nature plant leaf leaf"
  },
  {
    "title": "Hibiscus",
    "symbol": "🌺",
    "keywords": "hibiscus nature flower plant tropical"
  },
  {
    "title": "Sunflower",
    "symbol": "🌻",
    "keywords": "sunflower nature flower plant"
  },
  {
    "title": "Rose",
    "symbol": "🌹",
    "keywords":
      "rose nature flower plant rip rip condolence condolence beautiful beautiful"
  },
  {
    "title": "Tulip",
    "symbol": "🌷",
    "keywords": "tulip nature flower plant vagina girls night girls night"
  },
  {
    "title": "Blossom",
    "symbol": "🌼",
    "keywords": "blossom nature flower plant"
  },
  {
    "title": "Cherry Blossom",
    "symbol": "🌸",
    "keywords": "cherry blossom nature flower plant tropical"
  },
  {
    "title": "Bouquet",
    "symbol": "💐",
    "keywords": "bouquet nature flower plant rip rip condolence condolence"
  },
  {
    "title": "Mushroom",
    "symbol": "🍄",
    "keywords": "mushroom nature plant drugs drugs"
  },
  {
    "title": "Chestnut",
    "symbol": "🌰",
    "keywords": "chestnut nature plant"
  },
  {
    "title": "Jack o Lantern",
    "symbol": "🎃",
    "keywords": "jack-o-lantern holidays halloween"
  },
  {
    "title": "Shell",
    "symbol": "🐚",
    "keywords": "spiral shell"
  },
  {
    "title": "Spider Web",
    "symbol": "🕸",
    "keywords": "spider web halloween"
  },
  {
    "title": "Earth Americas",
    "symbol": "🌎",
    "keywords": "earth globe americas map vacation globe globe"
  },
  {
    "title": "Earth Africa",
    "symbol": "🌍",
    "keywords": "earth globe europe-africa map vacation globe globe"
  },
  {
    "title": "Earth Asia",
    "symbol": "🌏",
    "keywords": "earth globe asia-australia map vacation globe globe"
  },
  {
    "title": "Full Moon",
    "symbol": "🌕",
    "keywords": "full moon symbol space sky moon moon"
  },
  {
    "title": "Waning Gibbous Moon",
    "symbol": "🌖",
    "keywords": "waning gibbous moon symbol space sky moon moon"
  },
  {
    "title": "Last Quarter Moon",
    "symbol": "🌗",
    "keywords": "last quarter moon symbol space sky moon moon"
  },
  {
    "title": "Waning Crescent Moon",
    "symbol": "🌘",
    "keywords": "waning crescent moon symbol space sky moon moon"
  },
  {
    "title": "New Moon",
    "symbol": "🌑",
    "keywords": "new moon symbol space sky moon moon"
  },
  {
    "title": "Waxing Crescent Moon",
    "symbol": "🌒",
    "keywords": "waxing crescent moon symbol space sky moon moon"
  },
  {
    "title": "First Quarter Moon",
    "symbol": "🌓",
    "keywords": "first quarter moon symbol space sky moon moon"
  },
  {
    "title": "Waxing Gibbous Moon",
    "symbol": "🌔",
    "keywords": "waxing gibbous moon symbol space sky moon moon"
  },
  {
    "title": "New Moon With Face",
    "symbol": "🌚",
    "keywords": "new moon with face space sky goodnight goodnight moon moon"
  },
  {
    "title": "Full Moon With Face",
    "symbol": "🌝",
    "keywords": "full moon with face space sky goodnight goodnight moon moon"
  },
  {
    "title": "First Quarter Moon With Face",
    "symbol": "🌛",
    "keywords": "first quarter moon with face space sky moon moon"
  },
  {
    "title": "Last Quarter Moon With Face",
    "symbol": "🌜",
    "keywords": "last quarter moon with face space sky moon moon"
  },
  {
    "title": "Sun With Face",
    "symbol": "🌞",
    "keywords": "sun with face sky day sun hump day hump day morning morning"
  },
  {
    "title": "Crescent Moon",
    "symbol": "🌙",
    "keywords": "crescent moon space sky goodnight goodnight moon moon"
  },
  {
    "title": "Star",
    "symbol": "⭐",
    "keywords": "white medium star space sky star"
  },
  {
    "title": "Star2",
    "symbol": "🌟",
    "keywords": "glowing star space sky star"
  },
  {
    "title": "Dizzy",
    "symbol": "💫",
    "keywords": "dizzy symbol star symbol"
  },
  {
    "title": "Sparkles",
    "symbol": "✨",
    "keywords": "sparkles star girls night girls night"
  },
  {
    "title": "Comet",
    "symbol": "☄",
    "keywords": "comet space sky"
  },
  {
    "title": "Sunny",
    "symbol": "☀",
    "keywords":
      "black sun with rays weather sky day sun hot hot morning morning"
  },
  {
    "title": "White Sun Small Cloud",
    "symbol": "🌤",
    "keywords": "white sun with small cloud weather sky cloud sun"
  },
  {
    "title": "Partly Sunny",
    "symbol": "⛅",
    "keywords": "sun behind cloud weather sky cloud sun"
  },
  {
    "title": "White Sun Cloud",
    "symbol": "🌥",
    "keywords": "white sun behind cloud weather sky cloud cold sun"
  },
  {
    "title": "White Sun Rain Cloud",
    "symbol": "🌦",
    "keywords":
      "white sun behind cloud with rain weather sky cloud cold rain sun"
  },
  {
    "title": "Cloud",
    "symbol": "☁",
    "keywords": "cloud weather sky cloud cold rain"
  },
  {
    "title": "Cloud Rain",
    "symbol": "🌧",
    "keywords": "cloud with rain weather winter sky cloud cold rain"
  },
  {
    "title": "Thunder Cloud Rain",
    "symbol": "⛈",
    "keywords": "thunder cloud and rain weather sky cloud cold rain"
  },
  {
    "title": "Cloud Lightning",
    "symbol": "🌩",
    "keywords": "cloud with lightning weather sky cloud cold rain"
  },
  {
    "title": "Zap",
    "symbol": "⚡",
    "keywords": "high voltage sign weather sky diarrhea diarrhea"
  },
  {
    "title": "Fire",
    "symbol": "🔥",
    "keywords": "fire wth wth hot hot"
  },
  {
    "title": "Boom",
    "symbol": "💥",
    "keywords": "collision symbol symbol blast blast"
  },
  {
    "title": "Snowflake",
    "symbol": "❄",
    "keywords": "snowflake weather winter sky holidays cold snow snow"
  },
  {
    "title": "Cloud Snow",
    "symbol": "🌨",
    "keywords": "cloud with snow weather winter sky cloud cold snow snow"
  },
  {
    "title": "Snowman2",
    "symbol": "☃",
    "keywords": "snowman weather winter holidays christmas cold snow snow"
  },
  {
    "title": "Snowman",
    "symbol": "⛄",
    "keywords": "snowman without snow weather winter holidays cold snow snow"
  },
  {
    "title": "Wind Blowing Face",
    "symbol": "🌬",
    "keywords": "wind blowing face weather cold"
  },
  {
    "title": "Dash",
    "symbol": "💨",
    "keywords": "dash symbol cloud cold smoking smoking"
  },
  {
    "title": "Cloud Tornado",
    "symbol": "🌪",
    "keywords": "cloud with tornado weather sky cold"
  },
  {
    "title": "Fog",
    "symbol": "🌫",
    "keywords": "fog weather sky cold"
  },
  {
    "title": "Umbrella2",
    "symbol": "☂",
    "keywords": "umbrella weather object sky cold"
  },
  {
    "title": "Umbrella",
    "symbol": "☔",
    "keywords": "umbrella with rain drops weather sky cold rain"
  },
  {
    "title": "Droplet",
    "symbol": "💧",
    "keywords": "droplet weather sky rain"
  },
  {
    "title": "Sweat Drops",
    "symbol": "💦",
    "keywords": "splashing sweat symbol rain stressed sweat"
  },
  {
    "title": "Ocean",
    "symbol": "🌊",
    "keywords": "water wave weather boat tropical swim"
  },
  {
    "title": "Green Apple",
    "symbol": "🍏",
    "keywords": "green apple fruit food"
  },
  {
    "title": "Apple",
    "symbol": "🍎",
    "keywords": "red apple fruit food creationism creationism"
  },
  {
    "title": "Pear",
    "symbol": "🍐",
    "keywords": "pear fruit food"
  },
  {
    "title": "Tangerine",
    "symbol": "🍊",
    "keywords": "tangerine fruit food"
  },
  {
    "title": "Lemon",
    "symbol": "🍋",
    "keywords": "lemon fruit food"
  },
  {
    "title": "Banana",
    "symbol": "🍌",
    "keywords": "banana fruit penis food"
  },
  {
    "title": "Watermelon",
    "symbol": "🍉",
    "keywords": "watermelon fruit food"
  },
  {
    "title": "Grapes",
    "symbol": "🍇",
    "keywords": "grapes fruit food"
  },
  {
    "title": "Strawberry",
    "symbol": "🍓",
    "keywords": "strawberry fruit food"
  },
  {
    "title": "Melon",
    "symbol": "🍈",
    "keywords": "melon fruit boobs food"
  },
  {
    "title": "Cherries",
    "symbol": "🍒",
    "keywords": "cherries fruit food"
  },
  {
    "title": "Peach",
    "symbol": "🍑",
    "keywords": "peach fruit butt food"
  },
  {
    "title": "Pineapple",
    "symbol": "🍍",
    "keywords": "pineapple fruit food tropical"
  },
  {
    "title": "Tomato",
    "symbol": "🍅",
    "keywords": "tomato fruit vegetables food"
  },
  {
    "title": "Eggplant",
    "symbol": "🍆",
    "keywords": "aubergine vegetables penis food"
  },
  {
    "title": "Hot Pepper",
    "symbol": "🌶",
    "keywords": "hot pepper vegetables food"
  },
  {
    "title": "Corn",
    "symbol": "🌽",
    "keywords": "ear of maize vegetables food"
  },
  {
    "title": "Sweet Potato",
    "symbol": "🍠",
    "keywords": "roasted sweet potato vegetables food"
  },
  {
    "title": "Honey Pot",
    "symbol": "🍯",
    "keywords": "honey pot food vagina"
  },
  {
    "title": "Bread",
    "symbol": "🍞",
    "keywords": "bread food"
  },
  {
    "title": "Cheese",
    "symbol": "🧀",
    "keywords": "cheese wedge food"
  },
  {
    "title": "Poultry Leg",
    "symbol": "🍗",
    "keywords": "poultry leg food holidays"
  },
  {
    "title": "Meat On Bone",
    "symbol": "🍖",
    "keywords": "meat on bone food"
  },
  {
    "title": "Fried Shrimp",
    "symbol": "🍤",
    "keywords": "fried shrimp food"
  },
  {
    "title": "Cooking",
    "symbol": "🍳",
    "keywords": "cooking food"
  },
  {
    "title": "Hamburger",
    "symbol": "🍔",
    "keywords": "hamburger america food"
  },
  {
    "title": "Fries",
    "symbol": "🍟",
    "keywords": "french fries america food"
  },
  {
    "title": "Hotdog",
    "symbol": "🌭",
    "keywords": "hot dog america food"
  },
  {
    "title": "Pizza",
    "symbol": "🍕",
    "keywords": "slice of pizza italian food boys night boys night"
  },
  {
    "title": "Spaghetti",
    "symbol": "🍝",
    "keywords": "spaghetti noodles pasta italian food"
  },
  {
    "title": "Taco",
    "symbol": "🌮",
    "keywords": "taco food mexican vagina"
  },
  {
    "title": "Burrito",
    "symbol": "🌯",
    "keywords": "burrito food mexican"
  },
  {
    "title": "Ramen",
    "symbol": "🍜",
    "keywords": "steaming bowl noodles ramen japan food"
  },
  {
    "title": "Stew",
    "symbol": "🍲",
    "keywords": "pot of food food steam steam"
  },
  {
    "title": "Fish Cake",
    "symbol": "🍥",
    "keywords": "fish cake with swirl design sushi food"
  },
  {
    "title": "Sushi",
    "symbol": "🍣",
    "keywords": "sushi sushi japan food"
  },
  {
    "title": "Bento",
    "symbol": "🍱",
    "keywords": "bento box object sushi japan food"
  },
  {
    "title": "Curry",
    "symbol": "🍛",
    "keywords": "curry and rice food"
  },
  {
    "title": "Rice Ball",
    "symbol": "🍙",
    "keywords": "rice ball sushi japan food"
  },
  {
    "title": "Rice",
    "symbol": "🍚",
    "keywords": "cooked rice sushi japan food"
  },
  {
    "title": "Rice Cracker",
    "symbol": "🍘",
    "keywords": "rice cracker sushi food"
  },
  {
    "title": "Oden",
    "symbol": "🍢",
    "keywords": "oden food"
  },
  {
    "title": "Dango",
    "symbol": "🍡",
    "keywords": "dango food"
  },
  {
    "title": "Shaved Ice",
    "symbol": "🍧",
    "keywords": "shaved ice food"
  },
  {
    "title": "Ice Cream",
    "symbol": "🍨",
    "keywords": "ice cream food"
  },
  {
    "title": "Icecream",
    "symbol": "🍦",
    "keywords": "soft ice cream food"
  },
  {
    "title": "Cake",
    "symbol": "🍰",
    "keywords": "shortcake food"
  },
  {
    "title": "Birthday",
    "symbol": "🎂",
    "keywords": "birthday cake birthday food parties parties"
  },
  {
    "title": "Custard",
    "symbol": "🍮",
    "keywords": "custard food"
  },
  {
    "title": "Candy",
    "symbol": "🍬",
    "keywords": "candy food halloween"
  },
  {
    "title": "Lollipop",
    "symbol": "🍭",
    "keywords": "lollipop food halloween"
  },
  {
    "title": "Chocolate Bar",
    "symbol": "🍫",
    "keywords": "chocolate bar food halloween"
  },
  {
    "title": "Popcorn",
    "symbol": "🍿",
    "keywords": "popcorn food parties parties"
  },
  {
    "title": "Doughnut",
    "symbol": "🍩",
    "keywords": "doughnut food"
  },
  {
    "title": "Cookie",
    "symbol": "🍪",
    "keywords": "cookie food vagina"
  },
  {
    "title": "Beer",
    "symbol": "🍺",
    "keywords": "beer mug drink beer alcohol parties parties"
  },
  {
    "title": "Beers",
    "symbol": "🍻",
    "keywords":
      "clinking beer mugs drink cheers beer alcohol thank you boys night boys night parties parties"
  },
  {
    "title": "Wine Glass",
    "symbol": "🍷",
    "keywords":
      "wine glass drink italian alcohol girls night girls night parties parties"
  },
  {
    "title": "Cocktail",
    "symbol": "🍸",
    "keywords":
      "cocktail glass drink cocktail alcohol girls night girls night parties parties"
  },
  {
    "title": "Tropical Drink",
    "symbol": "🍹",
    "keywords": "tropical drink drink cocktail tropical alcohol"
  },
  {
    "title": "Champagne",
    "symbol": "🍾",
    "keywords": "bottle with popping cork drink cheers alcohol parties parties"
  },
  {
    "title": "Sake",
    "symbol": "🍶",
    "keywords":
      "sake bottle and cup drink japan sake alcohol girls night girls night"
  },
  {
    "title": "Tea",
    "symbol": "🍵",
    "keywords":
      "teacup without handle drink japan caffeine steam steam morning morning"
  },
  {
    "title": "Coffee",
    "symbol": "☕",
    "keywords": "hot beverage drink caffeine steam steam morning morning"
  },
  {
    "title": "Baby Bottle",
    "symbol": "🍼",
    "keywords": "baby bottle drink object food baby"
  },
  {
    "title": "Fork And Knife",
    "symbol": "🍴",
    "keywords": "fork and knife object weapon food"
  },
  {
    "title": "Fork Knife Plate",
    "symbol": "🍽",
    "keywords": "fork and knife with plate object food"
  },
  {
    "title": "Soccer",
    "symbol": "⚽",
    "keywords": "soccer ball game ball sport soccer football"
  },
  {
    "title": "Basketball",
    "symbol": "🏀",
    "keywords": "basketball and hoop game ball sport basketball"
  },
  {
    "title": "Football",
    "symbol": "🏈",
    "keywords": "american football america game ball sport football"
  },
  {
    "title": "Baseball",
    "symbol": "⚾",
    "keywords": "baseball game ball sport baseball"
  },
  {
    "title": "Tennis",
    "symbol": "🎾",
    "keywords": "tennis racquet and ball game ball sport tennis"
  },
  {
    "title": "Volleyball",
    "symbol": "🏐",
    "keywords": "volleyball game ball sport volleyball"
  },
  {
    "title": "Rugby Football",
    "symbol": "🏉",
    "keywords": "rugby football game sport football"
  },
  {
    "title": "8ball",
    "symbol": "🎱",
    "keywords": "billiards game ball sport billiards luck boys night boys night"
  },
  {
    "title": "Golf",
    "symbol": "⛳",
    "keywords": "flag in hole game ball vacation sport golf golf"
  },
  {
    "title": "Golfer",
    "symbol": "🏌",
    "keywords": "golfer men game ball vacation sport golf golf"
  },
  {
    "title": "Ping Pong",
    "symbol": "🏓",
    "keywords": "table tennis paddle and ball game ball sport ping pong"
  },
  {
    "title": "Badminton",
    "symbol": "🏸",
    "keywords": "badminton racquet game sport badminton"
  },
  {
    "title": "Hockey",
    "symbol": "🏒",
    "keywords": "ice hockey stick and puck game sport hockey"
  },
  {
    "title": "Field Hockey",
    "symbol": "🏑",
    "keywords": "field hockey stick and ball ball sport hockey"
  },
  {
    "title": "Cricket",
    "symbol": "🏏",
    "keywords": "cricket bat and ball ball sport cricket"
  },
  {
    "title": "Ski",
    "symbol": "🎿",
    "keywords": "ski and ski boot cold sport skiing"
  },
  {
    "title": "Skier",
    "symbol": "⛷",
    "keywords": "skier hat vacation cold sport skiing"
  },
  {
    "title": "Snowboarder",
    "symbol": "🏂",
    "keywords": "snowboarder hat vacation cold sport snowboarding"
  },
  {
    "title": "Ice Skate",
    "symbol": "⛸",
    "keywords": "ice skate cold sport ice skating"
  },
  {
    "title": "Bow And Arrow",
    "symbol": "🏹",
    "keywords": "bow and arrow weapon sport"
  },
  {
    "title": "Fishing Pole And Fish",
    "symbol": "🎣",
    "keywords": "fishing pole and fish vacation sport fishing"
  },
  {
    "title": "Rowboat",
    "symbol": "🚣",
    "keywords": "rowboat men workout sport rowing diversity diversity"
  },
  {
    "title": "Swimmer",
    "symbol": "🏊",
    "keywords": "swimmer workout sport swim diversity diversity"
  },
  {
    "title": "Surfer",
    "symbol": "🏄",
    "keywords": "surfer men vacation tropical sport diversity diversity"
  },
  {
    "title": "Bath",
    "symbol": "🛀",
    "keywords": "bath bathroom tired diversity diversity steam steam"
  },
  {
    "title": "Basketball Player",
    "symbol": "⛹",
    "keywords":
      "person with ball men game ball sport basketball diversity diversity"
  },
  {
    "title": "Lifter",
    "symbol": "🏋",
    "keywords":
      "weight lifter men workout flex sport weight lifting win win diversity diversity"
  },
  {
    "title": "Bicyclist",
    "symbol": "🚴",
    "keywords": "bicyclist men workout sport bike diversity diversity"
  },
  {
    "title": "Mountain Bicyclist",
    "symbol": "🚵",
    "keywords": "mountain bicyclist men sport bike diversity diversity"
  },
  {
    "title": "Horse Racing",
    "symbol": "🏇",
    "keywords": "horse racing men sport horse racing"
  },
  {
    "title": "Levitate",
    "symbol": "🕴",
    "keywords": "man in business suit levitating men job job"
  },
  {
    "title": "Trophy",
    "symbol": "🏆",
    "keywords":
      "trophy object game award win win perfect perfect parties parties"
  },
  {
    "title": "Running Shirt With Sash",
    "symbol": "🎽",
    "keywords": "running shirt with sash award"
  },
  {
    "title": "Medal",
    "symbol": "🏅",
    "keywords": "sports medal object award sport win win perfect perfect"
  },
  {
    "title": "Military Medal",
    "symbol": "🎖",
    "keywords": "military medal object award win win"
  },
  {
    "title": "Reminder Ribbon",
    "symbol": "🎗",
    "keywords": "reminder ribbon award"
  },
  {
    "title": "Rosette",
    "symbol": "🏵",
    "keywords": "rosette tropical"
  },
  {
    "title": "Ticket",
    "symbol": "🎫",
    "keywords": "ticket theatre movie parties parties"
  },
  {
    "title": "Tickets",
    "symbol": "🎟",
    "keywords": "admission tickets theatre movie parties parties"
  },
  {
    "title": "Performing Arts",
    "symbol": "🎭",
    "keywords": "performing arts theatre movie"
  },
  {
    "title": "Art",
    "symbol": "🎨",
    "keywords": "artist palette"
  },
  {
    "title": "Circus Tent",
    "symbol": "🎪",
    "keywords": "circus tent circus tent"
  },
  {
    "title": "Microphone",
    "symbol": "🎤",
    "keywords": "microphone instruments"
  },
  {
    "title": "Headphones",
    "symbol": "🎧",
    "keywords": "headphone instruments"
  },
  {
    "title": "Musical Score",
    "symbol": "🎼",
    "keywords": "musical score instruments"
  },
  {
    "title": "Musical Keyboard",
    "symbol": "🎹",
    "keywords": "musical keyboard instruments"
  },
  {
    "title": "Saxophone",
    "symbol": "🎷",
    "keywords": "saxophone instruments"
  },
  {
    "title": "Trumpet",
    "symbol": "🎺",
    "keywords": "trumpet instruments"
  },
  {
    "title": "Guitar",
    "symbol": "🎸",
    "keywords": "guitar instruments"
  },
  {
    "title": "Violin",
    "symbol": "🎻",
    "keywords": "violin instruments sarcastic sarcastic"
  },
  {
    "title": "Clapper",
    "symbol": "🎬",
    "keywords": "clapper board movie"
  },
  {
    "title": "Video Game",
    "symbol": "🎮",
    "keywords": "video game electronics game boys night boys night"
  },
  {
    "title": "Space Invader",
    "symbol": "👾",
    "keywords": "alien monster monster alien"
  },
  {
    "title": "Dart",
    "symbol": "🎯",
    "keywords": "direct hit game sport boys night boys night"
  },
  {
    "title": "Game Die",
    "symbol": "🎲",
    "keywords": "game die object game boys night boys night"
  },
  {
    "title": "Slot Machine",
    "symbol": "🎰",
    "keywords": "slot machine game boys night boys night"
  },
  {
    "title": "Bowling",
    "symbol": "🎳",
    "keywords": "bowling game ball sport boys night boys night"
  },
  {
    "title": "Red Car",
    "symbol": "🚗",
    "keywords": "automobile transportation car travel"
  },
  {
    "title": "Taxi",
    "symbol": "🚕",
    "keywords": "taxi transportation car travel"
  },
  {
    "title": "Blue Car",
    "symbol": "🚙",
    "keywords": "recreational vehicle transportation car travel"
  },
  {
    "title": "Bus",
    "symbol": "🚌",
    "keywords": "bus transportation bus office"
  },
  {
    "title": "Trolleybus",
    "symbol": "🚎",
    "keywords": "trolleybus transportation bus travel"
  },
  {
    "title": "Race Car",
    "symbol": "🏎",
    "keywords": "racing car transportation car"
  },
  {
    "title": "Police Car",
    "symbol": "🚓",
    "keywords": "police car transportation car police police 911 911"
  },
  {
    "title": "Ambulance",
    "symbol": "🚑",
    "keywords": "ambulance transportation 911 911"
  },
  {
    "title": "Fire Engine",
    "symbol": "🚒",
    "keywords": "fire engine transportation truck 911 911"
  },
  {
    "title": "Minibus",
    "symbol": "🚐",
    "keywords": "minibus transportation bus"
  },
  {
    "title": "Truck",
    "symbol": "🚚",
    "keywords": "delivery truck transportation truck"
  },
  {
    "title": "Articulated Lorry",
    "symbol": "🚛",
    "keywords": "articulated lorry transportation truck"
  },
  {
    "title": "Tractor",
    "symbol": "🚜",
    "keywords": "tractor transportation"
  },
  {
    "title": "Motorcycle",
    "symbol": "🏍",
    "keywords": "racing motorcycle transportation travel bike"
  },
  {
    "title": "Bike",
    "symbol": "🚲",
    "keywords": "bicycle transportation travel bike"
  },
  {
    "title": "Rotating Light",
    "symbol": "🚨",
    "keywords":
      "police cars revolving light transportation object police police 911 911"
  },
  {
    "title": "Oncoming Police Car",
    "symbol": "🚔",
    "keywords": "oncoming police car transportation car police police 911 911"
  },
  {
    "title": "Oncoming Bus",
    "symbol": "🚍",
    "keywords": "oncoming bus transportation bus travel"
  },
  {
    "title": "Oncoming Automobile",
    "symbol": "🚘",
    "keywords": "oncoming automobile transportation car travel"
  },
  {
    "title": "Oncoming Taxi",
    "symbol": "🚖",
    "keywords": "oncoming taxi transportation car travel"
  },
  {
    "title": "Aerial Tramway",
    "symbol": "🚡",
    "keywords": "aerial tramway transportation travel train"
  },
  {
    "title": "Mountain Cableway",
    "symbol": "🚠",
    "keywords": "mountain cableway transportation travel train"
  },
  {
    "title": "Suspension Railway",
    "symbol": "🚟",
    "keywords": "suspension railway transportation travel train"
  },
  {
    "title": "Railway Car",
    "symbol": "🚃",
    "keywords": "railway car transportation travel train"
  },
  {
    "title": "Train",
    "symbol": "🚋",
    "keywords": "tram car transportation travel train"
  },
  {
    "title": "Monorail",
    "symbol": "🚝",
    "keywords": "monorail transportation travel train vacation"
  },
  {
    "title": "Bullettrain Side",
    "symbol": "🚄",
    "keywords": "high-speed train transportation travel train"
  },
  {
    "title": "Bullettrain Front",
    "symbol": "🚅",
    "keywords": "high-speed train with bullet nose transportation travel train"
  },
  {
    "title": "Light Rail",
    "symbol": "🚈",
    "keywords": "light rail transportation travel train"
  },
  {
    "title": "Mountain Railway",
    "symbol": "🚞",
    "keywords": "mountain railway transportation travel train"
  },
  {
    "title": "Steam Locomotive",
    "symbol": "🚂",
    "keywords": "steam locomotive transportation travel train steam steam"
  },
  {
    "title": "Train2",
    "symbol": "🚆",
    "keywords": "train transportation travel train"
  },
  {
    "title": "Metro",
    "symbol": "🚇",
    "keywords": "metro transportation travel train"
  },
  {
    "title": "Tram",
    "symbol": "🚊",
    "keywords": "tram transportation travel train"
  },
  {
    "title": "Station",
    "symbol": "🚉",
    "keywords": "station transportation travel train"
  },
  {
    "title": "Helicopter",
    "symbol": "🚁",
    "keywords": "helicopter transportation plane travel fly fly"
  },
  {
    "title": "Airplane Small",
    "symbol": "🛩",
    "keywords": "small airplane transportation plane travel vacation fly fly"
  },
  {
    "title": "Airplane",
    "symbol": "✈",
    "keywords": "airplane transportation plane travel vacation fly fly"
  },
  {
    "title": "Airplane Departure",
    "symbol": "🛫",
    "keywords":
      "airplane departure transportation plane travel vacation fly fly"
  },
  {
    "title": "Airplane Arriving",
    "symbol": "🛬",
    "keywords": "airplane arriving transportation plane travel vacation fly fly"
  },
  {
    "title": "Sailboat",
    "symbol": "⛵",
    "keywords": "sailboat transportation travel boat vacation"
  },
  {
    "title": "Motorboat",
    "symbol": "🛥",
    "keywords": "motorboat transportation travel boat"
  },
  {
    "title": "Speedboat",
    "symbol": "🚤",
    "keywords": "speedboat transportation travel boat vacation tropical"
  },
  {
    "title": "Ferry",
    "symbol": "⛴",
    "keywords": "ferry transportation travel boat vacation"
  },
  {
    "title": "Cruise Ship",
    "symbol": "🛳",
    "keywords": "passenger ship transportation travel boat vacation"
  },
  {
    "title": "Rocket",
    "symbol": "🚀",
    "keywords": "rocket transportation object space fly fly blast blast"
  },
  {
    "title": "Satellite Orbital",
    "symbol": "🛰",
    "keywords": "satellite object"
  },
  {
    "title": "Seat",
    "symbol": "💺",
    "keywords": "seat transportation object travel vacation"
  },
  {
    "title": "Anchor",
    "symbol": "⚓",
    "keywords": "anchor object travel boat vacation"
  },
  {
    "title": "Construction",
    "symbol": "🚧",
    "keywords": "construction sign object"
  },
  {
    "title": "Fuelpump",
    "symbol": "⛽",
    "keywords": "fuel pump object gas pump"
  },
  {
    "title": "Busstop",
    "symbol": "🚏",
    "keywords": "bus stop object"
  },
  {
    "title": "Vertical Traffic Light",
    "symbol": "🚦",
    "keywords": "vertical traffic light object stop light"
  },
  {
    "title": "Traffic Light",
    "symbol": "🚥",
    "keywords": "horizontal traffic light object stop light"
  },
  {
    "title": "Checkered Flag",
    "symbol": "🏁",
    "keywords": "chequered flag object"
  },
  {
    "title": "Ship",
    "symbol": "🚢",
    "keywords": "ship transportation travel boat vacation"
  },
  {
    "title": "Ferris Wheel",
    "symbol": "🎡",
    "keywords": "ferris wheel places vacation ferris wheel"
  },
  {
    "title": "Roller Coaster",
    "symbol": "🎢",
    "keywords": "roller coaster places vacation roller coaster"
  },
  {
    "title": "Carousel Horse",
    "symbol": "🎠",
    "keywords": "carousel horse places object vacation roller coaster carousel"
  },
  {
    "title": "Construction Site",
    "symbol": "🏗",
    "keywords": "building construction building crane"
  },
  {
    "title": "Foggy",
    "symbol": "🌁",
    "keywords": "foggy places building sky travel vacation"
  },
  {
    "title": "Tokyo Tower",
    "symbol": "🗼",
    "keywords": "tokyo tower places travel vacation eiffel tower"
  },
  {
    "title": "Factory",
    "symbol": "🏭",
    "keywords": "factory places building travel steam steam"
  },
  {
    "title": "Fountain",
    "symbol": "⛲",
    "keywords": "fountain travel vacation"
  },
  {
    "title": "Rice Scene",
    "symbol": "🎑",
    "keywords": "moon viewing ceremony places space sky travel"
  },
  {
    "title": "Mountain",
    "symbol": "⛰",
    "keywords": "mountain places travel vacation camp"
  },
  {
    "title": "Mountain Snow",
    "symbol": "🏔",
    "keywords": "snow capped mountain places travel vacation cold camp"
  },
  {
    "title": "Mount Fuji",
    "symbol": "🗻",
    "keywords": "mount fuji places travel vacation cold camp"
  },
  {
    "title": "Volcano",
    "symbol": "🌋",
    "keywords": "volcano places tropical"
  },
  {
    "title": "Japan",
    "symbol": "🗾",
    "keywords": "silhouette of japan places travel map vacation tropical"
  },
  {
    "title": "Camping",
    "symbol": "🏕",
    "keywords": "camping places travel vacation camp"
  },
  {
    "title": "Tent",
    "symbol": "⛺",
    "keywords": "tent places travel vacation camp"
  },
  {
    "title": "Park",
    "symbol": "🏞",
    "keywords": "national park travel vacation park camp"
  },
  {
    "title": "Motorway",
    "symbol": "🛣",
    "keywords": "motorway travel vacation camp"
  },
  {
    "title": "Railway Track",
    "symbol": "🛤",
    "keywords": "railway track travel train vacation"
  },
  {
    "title": "Sunrise",
    "symbol": "🌅",
    "keywords":
      "sunrise places sky travel vacation tropical day sun hump day hump day morning morning"
  },
  {
    "title": "Sunrise Over Mountains",
    "symbol": "🌄",
    "keywords":
      "sunrise over mountains places sky travel vacation day sun camp morning morning"
  },
  {
    "title": "Desert",
    "symbol": "🏜",
    "keywords": "desert places travel vacation hot hot"
  },
  {
    "title": "Beach",
    "symbol": "🏖",
    "keywords": "beach with umbrella places travel vacation tropical beach swim"
  },
  {
    "title": "Island",
    "symbol": "🏝",
    "keywords": "desert island places travel vacation tropical beach swim"
  },
  {
    "title": "City Sunset",
    "symbol": "🌇",
    "keywords": "sunset over buildings places building sky vacation"
  },
  {
    "title": "City Dusk",
    "symbol": "🌆",
    "keywords": "cityscape at dusk places building"
  },
  {
    "title": "Cityscape",
    "symbol": "🏙",
    "keywords": "cityscape places building vacation"
  },
  {
    "title": "Night With Stars",
    "symbol": "🌃",
    "keywords":
      "night with stars places building sky vacation goodnight goodnight"
  },
  {
    "title": "Bridge At Night",
    "symbol": "🌉",
    "keywords": "bridge at night places travel vacation goodnight goodnight"
  },
  {
    "title": "Milky Way",
    "symbol": "🌌",
    "keywords": "milky way places space sky travel vacation"
  },
  {
    "title": "Stars",
    "symbol": "🌠",
    "keywords": "shooting star space"
  },
  {
    "title": "Sparkler",
    "symbol": "🎇",
    "keywords": "firework sparkler parties parties"
  },
  {
    "title": "Fireworks",
    "symbol": "🎆",
    "keywords": "fireworks parties parties"
  },
  {
    "title": "Rainbow",
    "symbol": "🌈",
    "keywords": "rainbow weather gay sky rain"
  },
  {
    "title": "Homes",
    "symbol": "🏘",
    "keywords": "house buildings places building house"
  },
  {
    "title": "European Castle",
    "symbol": "🏰",
    "keywords": "european castle places building travel vacation"
  },
  {
    "title": "Japanese Castle",
    "symbol": "🏯",
    "keywords": "japanese castle places building travel vacation"
  },
  {
    "title": "Stadium",
    "symbol": "🏟",
    "keywords": "stadium places building travel vacation boys night boys night"
  },
  {
    "title": "Statue Of Liberty",
    "symbol": "🗽",
    "keywords":
      "statue of liberty places america travel vacation statue of liberty free speech free speech"
  },
  {
    "title": "House",
    "symbol": "🏠",
    "keywords": "house building places building house"
  },
  {
    "title": "House With Garden",
    "symbol": "🏡",
    "keywords": "house with garden places building house"
  },
  {
    "title": "House Abandoned",
    "symbol": "🏚",
    "keywords": "derelict house building places building house"
  },
  {
    "title": "Office",
    "symbol": "🏢",
    "keywords": "office building places building work"
  },
  {
    "title": "Department Store",
    "symbol": "🏬",
    "keywords": "department store places building"
  },
  {
    "title": "Post Office",
    "symbol": "🏣",
    "keywords": "japanese post office places building post office"
  },
  {
    "title": "European Post Office",
    "symbol": "🏤",
    "keywords": "european post office places building post office"
  },
  {
    "title": "Hospital",
    "symbol": "🏥",
    "keywords": "hospital places building health 911 911"
  },
  {
    "title": "Bank",
    "symbol": "🏦",
    "keywords": "bank places building"
  },
  {
    "title": "Hotel",
    "symbol": "🏨",
    "keywords": "hotel places building vacation"
  },
  {
    "title": "Convenience Store",
    "symbol": "🏪",
    "keywords": "convenience store places building"
  },
  {
    "title": "School",
    "symbol": "🏫",
    "keywords": "school places building"
  },
  {
    "title": "Love Hotel",
    "symbol": "🏩",
    "keywords": "love hotel places building love"
  },
  {
    "title": "Wedding",
    "symbol": "💒",
    "keywords": "wedding places wedding building love parties parties"
  },
  {
    "title": "Classical Building",
    "symbol": "🏛",
    "keywords": "classical building places building travel vacation"
  },
  {
    "title": "Church",
    "symbol": "⛪",
    "keywords": "church places wedding religion building condolence condolence"
  },
  {
    "title": "Mosque",
    "symbol": "🕌",
    "keywords": "mosque places religion building vacation condolence condolence"
  },
  {
    "title": "Synagogue",
    "symbol": "🕍",
    "keywords":
      "synagogue places religion building travel vacation condolence condolence"
  },
  {
    "title": "Kaaba",
    "symbol": "🕋",
    "keywords": "kaaba places religion building condolence condolence"
  },
  {
    "title": "Shinto Shrine",
    "symbol": "⛩",
    "keywords": "shinto shrine places building travel vacation"
  },
  {
    "title": "Watch",
    "symbol": "⌚",
    "keywords": "watch electronics time"
  },
  {
    "title": "Iphone",
    "symbol": "📱",
    "keywords": "mobile phone electronics phone selfie selfie"
  },
  {
    "title": "Calling",
    "symbol": "📲",
    "keywords":
      "mobile phone with rightwards arrow at left electronics phone selfie selfie"
  },
  {
    "title": "Computer",
    "symbol": "💻",
    "keywords": "personal computer electronics work office"
  },
  {
    "title": "Keyboard",
    "symbol": "⌨",
    "keywords": "keyboard electronics work office"
  },
  {
    "title": "Desktop",
    "symbol": "🖥",
    "keywords": "desktop computer electronics work"
  },
  {
    "title": "Printer",
    "symbol": "🖨",
    "keywords": "printer electronics work office"
  },
  {
    "title": "Mouse Three Button",
    "symbol": "🖱",
    "keywords": "three button mouse electronics work game office"
  },
  {
    "title": "Trackball",
    "symbol": "🖲",
    "keywords": "trackball electronics work game office"
  },
  {
    "title": "Joystick",
    "symbol": "🕹",
    "keywords": "joystick electronics game boys night boys night"
  },
  {
    "title": "Compression",
    "symbol": "🗜",
    "keywords": "compression"
  },
  {
    "title": "Minidisc",
    "symbol": "💽",
    "keywords": "minidisc electronics"
  },
  {
    "title": "Floppy Disk",
    "symbol": "💾",
    "keywords": "floppy disk electronics office"
  },
  {
    "title": "Cd",
    "symbol": "💿",
    "keywords": "optical disc electronics"
  },
  {
    "title": "Dvd",
    "symbol": "📀",
    "keywords": "dvd electronics"
  },
  {
    "title": "Vhs",
    "symbol": "📼",
    "keywords": "videocassette electronics"
  },
  {
    "title": "Camera",
    "symbol": "📷",
    "keywords": "camera electronics camera selfie selfie"
  },
  {
    "title": "Camera With Flash",
    "symbol": "📸",
    "keywords": "camera with flash electronics camera"
  },
  {
    "title": "Video Camera",
    "symbol": "📹",
    "keywords": "video camera electronics camera movie"
  },
  {
    "title": "Movie Camera",
    "symbol": "🎥",
    "keywords": "movie camera object camera movie"
  },
  {
    "title": "Projector",
    "symbol": "📽",
    "keywords": "film projector object camera movie"
  },
  {
    "title": "Film Frames",
    "symbol": "🎞",
    "keywords": "film frames object camera movie"
  },
  {
    "title": "Telephone Receiver",
    "symbol": "📞",
    "keywords": "telephone receiver electronics phone"
  },
  {
    "title": "Telephone",
    "symbol": "☎",
    "keywords": "black telephone electronics phone"
  },
  {
    "title": "Pager",
    "symbol": "📟",
    "keywords": "pager electronics work"
  },
  {
    "title": "Fax",
    "symbol": "📠",
    "keywords": "fax machine electronics work office"
  },
  {
    "title": "Tv",
    "symbol": "📺",
    "keywords": "television electronics"
  },
  {
    "title": "Radio",
    "symbol": "📻",
    "keywords": "radio electronics"
  },
  {
    "title": "Microphone2",
    "symbol": "🎙",
    "keywords": "studio microphone electronics object"
  },
  {
    "title": "Level Slider",
    "symbol": "🎚",
    "keywords": "level slider"
  },
  {
    "title": "Control Knobs",
    "symbol": "🎛",
    "keywords": "control knobs time"
  },
  {
    "title": "Stopwatch",
    "symbol": "⏱",
    "keywords": "stopwatch electronics time"
  },
  {
    "title": "Timer",
    "symbol": "⏲",
    "keywords": "timer clock object time"
  },
  {
    "title": "Alarm Clock",
    "symbol": "⏰",
    "keywords": "alarm clock object time"
  },
  {
    "title": "Clock",
    "symbol": "🕰",
    "keywords": "mantlepiece clock object time"
  },
  {
    "title": "Hourglass Flowing Sand",
    "symbol": "⏳",
    "keywords": "hourglass with flowing sand object time"
  },
  {
    "title": "Hourglass",
    "symbol": "⌛",
    "keywords": "hourglass object time"
  },
  {
    "title": "Satellite",
    "symbol": "📡",
    "keywords": "satellite antenna object"
  },
  {
    "title": "Battery",
    "symbol": "🔋",
    "keywords": "battery object"
  },
  {
    "title": "Electric Plug",
    "symbol": "🔌",
    "keywords": "electric plug electronics"
  },
  {
    "title": "Bulb",
    "symbol": "💡",
    "keywords": "electric light bulb object science"
  },
  {
    "title": "Flashlight",
    "symbol": "🔦",
    "keywords": "electric torch electronics object"
  },
  {
    "title": "Candle",
    "symbol": "🕯",
    "keywords": "candle object"
  },
  {
    "title": "Wastebasket",
    "symbol": "🗑",
    "keywords": "wastebasket object work"
  },
  {
    "title": "Oil",
    "symbol": "🛢",
    "keywords": "oil drum object"
  },
  {
    "title": "Money With Wings",
    "symbol": "💸",
    "keywords": "money with wings money money boys night boys night"
  },
  {
    "title": "Dollar",
    "symbol": "💵",
    "keywords": "banknote with dollar sign money money"
  },
  {
    "title": "Yen",
    "symbol": "💴",
    "keywords": "banknote with yen sign money money"
  },
  {
    "title": "Euro",
    "symbol": "💶",
    "keywords": "banknote with euro sign money money"
  },
  {
    "title": "Pound",
    "symbol": "💷",
    "keywords": "banknote with pound sign money money"
  },
  {
    "title": "Moneybag",
    "symbol": "💰",
    "keywords": "money bag bag award money money"
  },
  {
    "title": "Credit Card",
    "symbol": "💳",
    "keywords": "credit card object money money boys night boys night"
  },
  {
    "title": "Gem",
    "symbol": "💎",
    "keywords": "gem stone object gem"
  },
  {
    "title": "Scales",
    "symbol": "⚖",
    "keywords": "scales object"
  },
  {
    "title": "Wrench",
    "symbol": "🔧",
    "keywords": "wrench object tool"
  },
  {
    "title": "Hammer",
    "symbol": "🔨",
    "keywords": "hammer object tool weapon"
  },
  {
    "title": "Hammer Pick",
    "symbol": "⚒",
    "keywords": "hammer and pick object tool weapon"
  },
  {
    "title": "Tools",
    "symbol": "🛠",
    "keywords": "hammer and wrench object tool"
  },
  {
    "title": "Pick",
    "symbol": "⛏",
    "keywords": "pick object tool weapon"
  },
  {
    "title": "Nut And Bolt",
    "symbol": "🔩",
    "keywords": "nut and bolt object tool nutcase nutcase"
  },
  {
    "title": "Gear",
    "symbol": "⚙",
    "keywords": "gear object tool"
  },
  {
    "title": "Chains",
    "symbol": "⛓",
    "keywords": "chains object tool"
  },
  {
    "title": "Gun",
    "symbol": "🔫",
    "keywords": "pistol object weapon dead gun sarcastic sarcastic"
  },
  {
    "title": "Bomb",
    "symbol": "💣",
    "keywords": "bomb object weapon dead blast blast"
  },
  {
    "title": "Knife",
    "symbol": "🔪",
    "keywords": "hocho object weapon"
  },
  {
    "title": "Dagger",
    "symbol": "🗡",
    "keywords": "dagger knife object weapon"
  },
  {
    "title": "Crossed Swords",
    "symbol": "⚔",
    "keywords": "crossed swords object weapon"
  },
  {
    "title": "Shield",
    "symbol": "🛡",
    "keywords": "shield object"
  },
  {
    "title": "Smoking",
    "symbol": "🚬",
    "keywords": "smoking symbol symbol drugs drugs smoking smoking"
  },
  {
    "title": "Skull Crossbones",
    "symbol": "☠",
    "keywords": "skull and crossbones symbol dead skull"
  },
  {
    "title": "Coffin",
    "symbol": "⚰",
    "keywords": "coffin object dead rip rip"
  },
  {
    "title": "Urn",
    "symbol": "⚱",
    "keywords": "funeral urn object dead rip rip"
  },
  {
    "title": "Amphora",
    "symbol": "🏺",
    "keywords": "amphora object"
  },
  {
    "title": "Crystal Ball",
    "symbol": "🔮",
    "keywords": "crystal ball object ball"
  },
  {
    "title": "Prayer Beads",
    "symbol": "📿",
    "keywords": "prayer beads object rosary"
  },
  {
    "title": "Barber",
    "symbol": "💈",
    "keywords": "barber pole object"
  },
  {
    "title": "Alembic",
    "symbol": "⚗",
    "keywords": "alembic object science"
  },
  {
    "title": "Telescope",
    "symbol": "🔭",
    "keywords": "telescope object space science"
  },
  {
    "title": "Microscope",
    "symbol": "🔬",
    "keywords": "microscope object science"
  },
  {
    "title": "Hole",
    "symbol": "🕳",
    "keywords": "hole object"
  },
  {
    "title": "Pill",
    "symbol": "💊",
    "keywords": "pill object health drugs drugs"
  },
  {
    "title": "Syringe",
    "symbol": "💉",
    "keywords": "syringe object weapon health drugs drugs"
  },
  {
    "title": "Thermometer",
    "symbol": "🌡",
    "keywords": "thermometer object science health hot hot"
  },
  {
    "title": "Label",
    "symbol": "🏷",
    "keywords": "label object"
  },
  {
    "title": "Bookmark",
    "symbol": "🔖",
    "keywords": "bookmark object book"
  },
  {
    "title": "Toilet",
    "symbol": "🚽",
    "keywords": "toilet object bathroom"
  },
  {
    "title": "Shower",
    "symbol": "🚿",
    "keywords": "shower object bathroom"
  },
  {
    "title": "Bathtub",
    "symbol": "🛁",
    "keywords": "bathtub object bathroom tired steam steam"
  }
]

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(()=>{
    const newData = emojiData.filter((emoji)=>emoji.title.toLowerCase().includes(search.toLocaleLowerCase()))
    setData(newData)
    },[search])

  return (
    <div className="App">
      <h1>😸 Emoji Search 😺</h1>
      <input type={'text'} onChange={(e)=>setSearch(e.target.value)}
      value={search}
      />
      {data.map((emoji)=>(
        <h2 key={emoji.title} >{emoji.symbol}{emoji.title}</h2>
      ))}
    </div>
  );
}

export default App;
