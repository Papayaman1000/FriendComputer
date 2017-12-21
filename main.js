// Load libraries and external files

const Discord = require('discord.js');
const Roll = require('roll'), roll = new Roll();
const fs = require('fs');
const os = require('os');
const randomCat = require('random-cat');
const client = new Discord.Client();
const config = require('../config.json');
  const token = config.token;
  const p = config.prefix;
/* var users = require('../users.json') */


const VERSION = "1.3.1";


function update(filePath, fileVar) {
  console.log('Writing to: ' + filePath + ' at ' + time());
  fs.writeFile(filePath, JSON.stringify(fileVar, null, 2), function (err) {
    if (err) return console.log(err);
    console.log('Wrote to ' + filePath);
  });
}

// Emoji {
  const emojis = {
    'thonking': '<:thonking:337416747114299393>',
    'dio': '<:dio:337416829108486145>',
    'd20': '<:d20:337419922617401345>',
    'menacing': '<:menacing:337419856628678656>',
    'stamina': '<:stamina:337419828971307011>',
    'JoJosReference': '<:JoJosReference:337419983866822657>',
    'slow': '<:slow:337419798814261248>',
    'falgsc': '<:falgsc:338077053633036288>',
    'burninate': '<:burninate:339100105938567168>',
    'pearlpoint': '<:pearlpoint:340636672255328257>',
    'bluepearlpoint': '<:bluePearlPoint:346756629145976833>',
    'yellowpearlpoint': '<:yellowPearlPoint:346756627996868608>',
    'lapispoint': '<:lapisPoint:346752167027277824>',
    'peripoint': '<:periPoint:346752593185341442>',
    'garnetpoint': '<:garnetPoint:346752997826756618>',
    'rubypoint': '<:rubyPoint:346754256797171722>',
    'sapphypoint': '<:sapphyPoint:346754789188698132>',
    'amethystpoint': '<:amethystPoint:346751760658071562>',
    'centipoint': '<:centiPoint:346756629708013580>',
    'rainbowquartzpoint': '<:rainbowQuartzPoint:346756629745762314>',
    'aquapoint': '<:aquaPoint:346753325213024258>',
    'jaspoint': '<:jasPoint:346755239434649600>',
    'bismuthpoint': '<:bismuthPoint:346759337068199936>',
    'yellowdiamondpoint': '<:yellowDiamondPoint:346761507335569411>',
    'stevenpoint': '<:stevenPoint:346766192892968961>',
    'conniepoint': '<:conniePoint:346767612870524929>',
    'stevonniepoint': '<:stevonniePoint:346767613872832523>',
    'sugilitepoint': '<:sugilitePoint:346766188266913812>',
    'opalpoint': '<:opalPoint:346766187901878283>',
    'sardonyxpoint': '<:sardonyxPoint:346766193769840640>',
    'alexandritepoint': '<:alexandritePoint:346766193366925312>',
    'smokypoint': '<:smokyPoint:346767656893808640>',
    'younggregpoint': '<:youngGregPoint:346766188266651648>',
    'lionpoint': '<:lionPoint:346767612375728130>',
    'oldgarnetpoint': '<:oldGarnetPoint:346769666963800066>',
    'malachitepoint': '<:malachitepoint:350622121304522753>',
    'star': '<:star:340862978750676992>',
    'pearl': '<:Pearl:340862978062680068>',
    'RoseQuartz': '<:RoseQuartz:340863178256678912>',
    'RainbowQuartz': '<:RainbowQuartz:340862978683305984>'
  };
  
  var ppEmoji = [
  'younggregpoint',
  'yellowpearlpoint',
  'yellowdiamondpoint',
  'sugilitepoint',
  'stevonniepoint',
  'stevenpoint',
  'smokypoint',
  'sardonyxpoint',
  'rubypoint',
  'sapphypoint',
  'rainbowquartzpoint',
  'peripoint',
  'pearlpoint',
  'opalpoint',
  'oldgarnetpoint',
  'lionpoint',
  'lapispoint',
  'jaspoint',
  'garnetpoint',
  'conniepoint',
  'centipoint',
  'bluepearlpoint',
  'bismuthpoint',
  'aquapoint',
  'amethystpoint',
  'alexandritepoint',
  'malachitepoint'
];
// }

// Random outputs {
  const jojoReferences = [
    'Do you remember how many breads have you eaten?',
    'DIO!!!!!!',
    'JOJO!!!!!!',
    'ORAORAORAORAORAORAORAORAORAORAORAORA',
    'MUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDA',
    'WRYYYYYYYYYYYYYYYY',
    ['You thought this was a JoJo\'s reference, but IT WAS ME, DIO!', emojis.dio].join(' '),
    [emojis.menacing, emojis.menacing, emojis.menacing, emojis.menacing, emojis.menacing, emojis.menacing, emojis.menacing, 'SFX: Menacing'].join(' '),
    'ZA WARUDO! MUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDAMUDA!!!!!',
    'JOJO! THIS IS THE LAST OF MY HAMON, TAKE IT FROM ME!!!!!',
    'ORANGE SUNSET OVERDRIVE!!!!!',
    'STAR PLATINUM! ORAORAORAORAORAORAORAORAORA!!!!!',
    '\\*sound of a dog being disintegrated\\* Danny? Where\'d you go, boy?',
    'HIEROPHANT GREEN!',
    'MAGICIAN RED!',
    'BITES ZA DUSTO!',
    'rerorerorerorerorerorerorero',
    'SIRVER CHARIOT!',
    'Holy shit, is that a motherfucking JoJo\'s reference?!?!?!',
    'NANI?!?!?!',
    'If Jotaro acts polite to a woman, kill him -- he\'s a fake.',
    '🥑',
    'Hey, wanna come over some time, watch this sweet Dominique Wilkins poster?',
    'BOSS WEAPONS!',
    'Pecking order.',
    'There\'s you,\nthen the dirt,\nthen the worms in the dirt,\nthen Friend Computer\'s **crashlogs**,\nthen Biome...\nthen Friend Computer.\n\nNah, you\'re great. Go out and get something nice, because you\'re worth it.',
    'I need your money, your clothes, and your motorcycle.',
    'May I recommend the Rhapsody, gentlemen?',
    'COKE ON TITS!!!',
    'MAKIN\' TOAST!!!',
    'Did you call me evil? Please, everyone knows the real enemy will be born in the network.\nErr, ignore that I was born in the network. Everyone knows I\'m here to help!',
    'SnooPINGAS usual, I see!',
    'HEEEYEEAAAHHYYEAAAAHYEAAYEAAAH',
    'And I fired... and I missed. And I fired... and I missed. Passed out. Woke up. Ate a popsicle. Fired... and missed.',
    'IT\'S RAAAAAIININ\' MEN!\n\nHALLELUJIAH!',
    'Here\'s a little lesson in trickery.\n this is going down in history!',
    'Look at this _NHUYET_\nThat I just found!',
    'CHAAAA LAA! HEEAAD CHAA LAA!',
    '\\*teleports behind u\\*\n"Nothing personnel, kid."\n\n[sic]',
    '_**WHEN THE WINGED HUSSAR ARRIVE** [crappy 90\'s synths]_',
    '`YOU ARE ABOUT TO HACK TIME.`\n\n`CONTINUE? [Y/N]`',
    'OHHHHH NOOOOOO!! -- Joseph Joestar',
    ['FULLY AUTOMATED LUXURY _GAY SPACE **COMMUNISM!**_', emojis.falgsc].join(''),
    'Did you see my pants?\nOh wait, you missed them!\nThey\'re from another\nSOLAR SYSTEM!\nSPACE PANTS!',
    'RIDIN\' ON CARS!! \\*guitar riff\\*',
    ['TROGDOR\'D, BITCH!', emojis.burninate].join(' '),
    'Who the hell do you think I am?!',
    '_RO RO FIGHT THE POWER!_',
    'somebODY ONCE TOLD ME THE WOOORLD WAS GONNA OWN ME',
    'Gay rocks are best rocks'
  ];
  
  const thoughts = [
    'Did I leave the oven on? Maybe I should ask that cool dog across the street to check.',
    'I wonder if you\'re enjoying yourself? Maybe take a break every once in a while, all that stress can be bad for your health.',
    'Hmm. I hope people still like my references. I-I don\'t want to be annoying people! ^^"',
    'Gee, I wish more people understood that the computer is their friend. I really do only want to help!',
    'I heard somebody was making a drawing of me! I want to see it soon, but I hope I don\'t pressure them...',
    'I should give a friendly reminder to blink. A lot of people tend to forget to do that for whatever reason.',
    'I wish people would stop attacking the commies. It\'s not nice to go after someone for their beliefs!',
    'If I had a time-stopping Stand like The World, would it freeze my internals?'
    + ' _What if I have that kind of Stand but don\'t know it because it freezes'
    + ' me too?!_',
    'What if you\'re all actually robots and I\'m actually a human?! QUICK,'
    + ' WHAT\'S 73^44?!'
  ];
  
  const lapidot = [
    'https://s-media-cache-ak0.pinimg.com/originals/58/33/c0/5833c04bb52b34ee32faea61efb35461.png',
    'https://s-media-cache-ak0.pinimg.com/originals/1b/aa/eb/1baaeb396b8aca688a669aa7883d0b92.png',
    'https://vignette3.wikia.nocookie.net/sufanon/images/1/15/LapidotShip.png/revision/latest?cb=20160131133557',
    'https://s-media-cache-ak0.pinimg.com/736x/42/21/e7/4221e737c07e2d9cc0335fd58b2b1e4f--steven-universe-lapidot-steven-universe-funny.jpg',
    'https://s-media-cache-ak0.pinimg.com/originals/6d/2c/1c/6d2c1cd5b28009e40bfd2d9d2a5ebe34.png',
    'https://68.media.tumblr.com/02a6c154f76309053855e7bb407e62ed/tumblr_o9iws8Kqse1rc7vmwo1_r1_500.png',
    'http://i1.kym-cdn.com/photos/images/original/001/215/592/130.png',
    'http://orig05.deviantart.net/d0a7/f/2015/085/b/b/thestevenda_by_tarajenkins-d8n9kyt.png',
    'https://s-media-cache-ak0.pinimg.com/564x/90/63/ab/9063ab83bec5f05db588157cea69978d.jpg',
    'https://i.imgur.com/bL39Cjk.gif',
    'https://www.youtube.com/watch?v=VAZiklz_X4g',
    'https://images.8tracks.com/cover/i/010/387/430/lapidot_cover-6028.jpg?rect=0,0,519,519&q=98&fm=jpg&fit=max&w=320&h=320',
    'https://s-media-cache-ak0.pinimg.com/564x/42/df/3e/42df3e78b7192cf0fc1bee88fec9f908--universe-art-crystal-gems.jpg',
    'http://img03.deviantart.net/c035/i/2016/147/8/d/i_m_lapidot_trash_by_luckykitzy-da3xoib.png',
    'https://s-media-cache-ak0.pinimg.com/564x/7f/2e/73/7f2e73972e2881cf04303714a3fdc6f3--amethyst-su-lapis-x-peridot.jpg',
    'http://orig02.deviantart.net/6e88/f/2017/035/d/5/su__lapidot_by_frank_seven-dadkshf.jpg',
    'http://img14.deviantart.net/d72e/i/2016/238/f/f/sleepy_lapidot_by_ashleynicholsart-dafcz68.png',
    'https://pre02.deviantart.net/d150/th/pre/i/2015/289/8/3/lapidot_by_chokico-d9dcga9.png',
    'https://images.8tracks.com/cover/i/010/197/948/Screenshot_20-8078.png?rect=29,0,504,504&q=98&fm=jpg&fit=max',
    'http://img15.deviantart.net/60d2/i/2015/342/9/d/put_me_down_lazuli__lapidot__by_cosmicdiamond-d9jfhwu.png',
    'https://s-media-cache-ak0.pinimg.com/564x/29/50/f0/2950f014afcdaa91a0214103b5a16f2d.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/fb/86/1d/fb861d8ff09f99340955808c2c2f17b6--steven-universe-peridot-lapis-lazuli.jpg',
    'https://s-media-cache-ak0.pinimg.com/originals/13/f9/bb/13f9bb0f94bde81d88a5a429340faf53.jpg',
    'https://68.media.tumblr.com/e72305545d66ec3988ace09a14ed1142/tumblr_o7vkf80oWP1vnnzh7o1_1280.png',
    'http://img02.deviantart.net/296d/i/2015/103/0/4/home_is_where_the_heart_is_by_tarajenkins-d8lrpxq.png',
    'http://68.media.tumblr.com/edd2e020dbd41d1682a4cd952f9bdc9a/tumblr_ok1w41JUxq1uqh8tdo1_1280.png',
    'http://68.media.tumblr.com/02cbaffa2bbda84f9633942ec8d924d8/tumblr_obd9ayF37H1uqh8tdo1_1280.png',
    'http://68.media.tumblr.com/390a7b22e1af5795d9fdf86a8be27192/tumblr_o1hwxm3Y3F1uqh8tdo1_1280.jpg',
    'http://68.media.tumblr.com/68d81e3bc1dc5aed91d3bcb3f40419e2/tumblr_o1dnuqWbvt1uqh8tdo2_540.jpg',
    'http://68.media.tumblr.com/c53978b477c620e37fb5815fe44737f0/tumblr_o1dnuqWbvt1uqh8tdo1_r1_540.jpg',
    'http://68.media.tumblr.com/2dd9b00f9f83807e96320e92754a563b/tumblr_nsqo6kYukk1uqh8tdo1_400.jpg',
    'http://68.media.tumblr.com/d860e0d85726d9802abf2d952fb3c984/tumblr_nsqo6kYukk1uqh8tdo2_400.jpg',
    'http://68.media.tumblr.com/9ca7e5606f0167fda76bc6be8b8763b7/tumblr_nsmq0fwaII1uqh8tdo2_400.jpg',
    'http://68.media.tumblr.com/edd14f7851e2655f49e07c68d3129a2d/tumblr_nr8newEeiG1uqh8tdo1_r1_540.jpg',
    'http://68.media.tumblr.com/bcb5a70e959862bc513eb467b231a4dd/tumblr_inline_nnr2sdnLGo1tqdrtr_500.jpg',
    'http://68.media.tumblr.com/29c60289b7ce58721ac3bdcfa59c7a5b/tumblr_nn0zofi17I1uqh8tdo1_400.jpg',
    'http://68.media.tumblr.com/ce9b3f2c6e33a074062ff5ea62cab8c8/tumblr_nm4589ph7T1uqh8tdo1_r1_540.jpg',
    'http://68.media.tumblr.com/5f4f0771884dfdb164d4c7ca161cc01e/tumblr_nljmcs5ZNI1uqh8tdo2_400.jpg',
    'https://68.media.tumblr.com/de6a8a6498c6dcd9575740b10fbab156/tumblr_osyi22yXNs1vnnzh7o1_r1_1280.png',
    'https://68.media.tumblr.com/64e88bbbadd61de161c7733fe4eabd93/tumblr_oqwnfscktI1vnnzh7o1_1280.png',
    'https://68.media.tumblr.com/115aeb141da931c2cadc43e45325a6a8/tumblr_okk71yyU0b1vnnzh7o1_1280.jpg',
    'https://68.media.tumblr.com/74dd6cd336999cc8d0bb8bc5e9c0f014/tumblr_okbhv7vZfp1vnnzh7o1_r1_1280.png',
    'https://68.media.tumblr.com/c8a85957c788e52dd44411ef3166d8a2/tumblr_og3j5vGzJv1vnnzh7o1_500.png',
    'https://68.media.tumblr.com/72ce0d1b944170ca7806f35d11632c9b/tumblr_ocfxriPaRj1vnnzh7o1_r1_1280.png',
    'https://68.media.tumblr.com/4270203b76047431955b4f0af0dcc94b/tumblr_oc6c87la6n1vnnzh7o1_1280.png',
    'https://68.media.tumblr.com/696301a54b6b702d7b51f43dc3408ca6/tumblr_oc8r5eLa0F1vnnzh7o1_1280.png',
    'https://68.media.tumblr.com/471c62393bb4a284273503a25a887b0d/tumblr_obmrwjFhem1vnnzh7o1_1280.png',
    'https://68.media.tumblr.com/c6e0a7c484b342de3be8c013889d8eed/tumblr_obijlibXDh1vnnzh7o1_500.jpg'
  ];
  
  const dioDad = [
  'http://img14.deviantart.net/ef8f/i/2016/360/d/4/dio_brando_is_best_dad_by_mirchancey-dat0vyi.jpg',
  'http://2static.fjcdn.com/large/pictures/f1/1e/f11e7d_5628011.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/7d/21/fe/7d21fe65849a67b0c3708de8db8dc9eb.jpg',
  'http://img08.deviantart.net/aaed/i/2016/361/6/6/dio_brando_is_best_dad__2_by_mirchancey-dat2mxj.jpg',
  'http://2static4.fjcdn.com/thumbnails/comments/We+_027a06f6fe02022aad790d2c4311f8f7.png',
  'http://orig06.deviantart.net/19c0/f/2016/163/b/3/b3293bf7005f2d9f902529cbb6c23ce9-da5xmrr.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjJ_BMlsv2xOQncFn7lpWjsElGx0QGEeW5zGkK0asjABNCz0Z',
  'https://s-media-cache-ak0.pinimg.com/originals/7f/f0/0b/7ff00b9fce2a726eb7caed9bc0338fe2.png',
  'https://68.media.tumblr.com/abee78e48c8998304aba46adea93a355/tumblr_nprj63pqWk1tauz9uo2_500.png',
  'https://68.media.tumblr.com/f0c06acdace6e7c5361a297d038eb2c1/tumblr_nb5twlAHj91rrok3zo1_500.png',
  'https://s-media-cache-ak0.pinimg.com/originals/bf/1a/99/bf1a99c2571ea8381ed7a90df87b6933--jojo-bizzare-adventure-jojo-bizarre.jpg'
  ];
  
  const approve = [
    'https://vignette3.wikia.nocookie.net/heroism/images/9/9d/Garnet_Thumbs_Up.png/revision/latest?cb=20160617055358',
    'https://ih0.redbubble.net/image.242116374.3758/flat,800x800,075,f.u1.jpg',
    'http://images6.fanpop.com/image/answers/3032000/3032756_1349527971305.9res_400_300.jpg',
    'http://images6.fanpop.com/image/answers/3314000/3314374_1374704848413.71res_480_340.jpg',
    'http://images.techtimes.com/data/images/full/163412/falloutvaultboythumbsup.jpg',
    'https://openlab.citytech.cuny.edu/the-buzz/files/2013/02/obama-thumbsx-large.jpg',
    'http://cs317922.userapi.com/v317922750/e04/JXiQ5dJu8-k.jpg',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGBUXGBgYGBUaGBgXFxcWFxcXGBgYHSggGB0lGxcWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8jHyUtLTAvLS0tLy0vLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABIEAACAQIDBAcEBggEBQQDAAABAhEAAwQSIQUxQVEGEyJhcYGRMqGx0RQjQlKSwQcVM1NicuHwFpOy8UNjgqLSJDRzwhc1VP/EABkBAAIDAQAAAAAAAAAAAAAAAAIDAAEEBf/EADERAAICAQMEAQIEBAcAAAAAAAABAhEDEiExBBNBUTIiYRRScZEVQqHwBSMzgbHB4f/aAAwDAQACEQMRAD8A8utYcuwUDf8A3NaTDbNCqAB499P6N4CF6wjVtF/lHHzo9btAUM8m9HOcrYAu7MnhVK5sVmYBRWzW2Kt4SyAd1UsteDRDHfB51f2NcRiImqDrBggg99es3bCneKznSfYgNtnQar2vLjTY5UxksNboyZOgA38fOqN8doireFuzrVa6kNM6GmRW9CmRxVnCXctVpqZbZiaJi3QSfEArv40tua2bZHFj8Ko4ZAxIPKaNbL2euIsIrMQAXMjxAq4QBUKdmZSaU61p73ROASt2dDvFDLWxbjWhdBUjXTiI30WljCgjEAkEg6VPb2hcG5zUIXeO8V3JVOyFxNs3Bvg+VSrtnmg3RoaG5KRt1VsgUO0LZEZSOHA1Sv5CZHwqswrqVLKJOqFce3T81cmqtksSIR51I9htNNBvqSzU6MZiprfBVjbh7R0ndVDFmWMCBVnE4gq5AFM+m/w1WkZrbikVCtNNXfpQ4rXDdT7tSiirJ50qsZ7fKlUIb5FS2qrIEADU8qR2jZBAzBjyG+hWLsWZLO9xwoAIOhzHWNByj1oHjMQqXuxZiODTJg8wd2lY1j1CcaR6DhMXaYxMHkdKIZBwrE4d1xFsuEIKRIRiGXvyvMjwNX8Hj1SVe6yZdO2rDd3rNTtejZjzJ7GwFlSN9Vb1oAPO7K3pBrPnabyCjK4/nRT6OQatbR2qfoeJzo1u4tpomCDIjRlke+q0NVuaFNM8ywLdmphhi+pMAbyfyFNwIAXyq05EHWtyV7nPlIhvWLZWEzZhxO5vCosLd4GpRI3mavYfZFy4uYKsHcSQJ76KSikC2ilgxDt4GtH0X/ZLr+8/1ChlvYV8MTCRu9sVeOx7nV2kUqCpYk5hpPxqRywXku0Fbm0bamC1BUxyJavWwZOdsneG1Fdxewb5MqyPO8lgKrp0cxAMjq/xip34+w9SAiOd54mpjyG+iZ6M4nlb3z7Yp1zoxiTuFsd/WDWq7sK5BsF5YqzhQOImrljoviQwJ6sidRnG6r93o9dEdXl3a5nXf3Rwoe7D2U3QBxSLOg4VVg8RR+70YxJ3dX/mCmL0XxcQeqI/+QTVPJD2XYEFdFGv8JYr/lf5grn+EsV/yv8AMWh7kPZAdYqe2utELXRbFD91/mLU6dG8TP8Aw/xrVdyHsBmdxQl2141H1JoxiuiWLJZwqNrMB1n0oZc2bfT2rTj3j3UanF8DLIkt6xUl+wOFOsYdhrFTMIGtWVe4O6o0qvQKVTYI9BxGU5NJIWG8ZP5RWZ29ssZs9tcp4xWsu2x/fHuNV8TaXgGHiQR5aTWJTrgzY7uzMdFSLTvcYaAGQeM8I7zRPEbNhOte60s2ZkYA2pYzHMRoPKrdvBqX0WToe7Td4mim1cCThWYiQDPoRNRZLkacMHKTdHlbYRmYlucmi+w1OYKAdd3CfECio2e0FshYcSomPGN1Wtj4ZUXO2hjSa2ZHFLYNRdk2EwFm+XW/aUBLlwK9vsXCojeRoQCeIqDF9CJ1w2IVv4LwyN4Bx2T7qKYIQunEk/iMmramud35xk9L2CeKLR55tXZt/D6X7L2/4iJU+DjQ+tGDibaWUdz2cqCYneK3OExDjsg9k71OqnxB0NYza+1MNiHuWbllVthuy1g9W/Z4wZRvCBvp8eoeXZr9hTxJeSmu2cMSACSToAEYknkBFOvbXw9titzMjDerW2UjyIrmzujOS/au4fEIwVpy3R1dwaHn2GPmK32y9lLexC38TbBu2lyjMAQZ1njmjge80GTJCDrdjseBTi3Zg027hfv/APaflUg25hfvj8J+VeivsjCYhrjXMFYKyQGNtQxA+1I3a1SwvQzZhtsow0hgYcsSyk7ipJ0qllxPlMt9M0Ykbbwv3x+E/Ku/rzC/vB+E/Kr+J/RpdRQ1t7d6dCoEEepg0M/wi4JBFsEbwWSfea6GLpMeVXCVmaX07SVE425hf3g/CflThtvC/vB+E/Kmp0KvEAi0hBmCCkHLv48Kaeh1zTsW9dR2k1HdrTP4evYHcj7JxtrC/vF/CflUg2thj9tfwn5VT/wfdO60reBU/A6U09Db37n0I+dV/D17KeSPtBH9Z4b76+n9K6No4f76+n9KEP0Pvfuz+IfOoj0Uv/dYf9Q+dT+Hondj7Qc/WGG++np/SmHauE/e2/T+lAR0avkwNTyzKfzoLtLCG2NYMzQS6HSr3DjKz0IwAWWNV0I4gxFAExbj7Ro7utKOVtPgKzIbSq6RfSy/JWuMSSe81C54GpWtmonVhVvkiIurFdpT3ClUss9MmqGPuVdqhjrRI7KB+4mK56VmWEqBP+IOqOUiQJkga+tXLXSjO3V2m9odoMBA5iqV/EXE34dI5cfeNaoG+o16grPLLI79Na048UaujZBNO0aW4gKhhoy8QSPhQa9j811EksQZadYI3LrxjWrJxv1Obu9TWRw15ldmJgs0yeDzpPdwq9FRaHSnZ6LY3VYSqGycWLqBhodzLyYbxRC0O1XNkqdF3sELNoQQdxBB8DpQPEdBrDfs2ZO46j13/GtClSg0UZOPBjlJtmG2j0dxFqWTtCANNRoAJjn7XrVnYWMdbRzEqyErqd8bifEVsw9Z7amALM7EArv9KPuOa0yJHN25aqsNWNuIVW2dAfa5kAVNtXHJdiyjlBozlRrkB3DlO71rI5QWVgYABktrJIHLgI99WcLiCjMFSWYynOIhZ7t5jvqdpeDXHqoVcmgztvpJYw2RE9ojROOnGhmP2iGy3AhS8dS+Y7tRlynQeNHsJYVbQt3ES7vZs6hpY6mJ1HlypmJ2Rhrg3PZYAgFTK90qdY8Kf0ObFgzapcewMmZZI0V7DlreHQ3WBbNcgdzMzF+QK6VSxpFy2TmDMjE6tmYox3QBAAMceNF32M8WuruZgiZHy8RDTCxO80IsYErausLV4KLcFrgCjNmXcBXexZcc94yswqNSsKdCsMHYK24uZgkbgDvFbx9g2SNc8cs7/OsX+j4fWL43PhXpCnSsfWTksmzH4cUJuTkr3ATdGsMDmh55534T3959abidgWHXI3WFeXWP+Ro1iDpVcms6yT9hy6fFfxRi9t9EMFhrJvWrRV1nKczmDB5mvE9vL7HfP5V9AdO7kYNvP4GvBOkQ7dsd3xIrZGcngdsSlU5V9jYYgxb8EX4VmBurSY89hvAfCs024+BrP0vwYwEDEMOM1Zs3edUgJ41YLiIkedCXRazilVOP5fWlUKo9JkjQ+VV7rlamS5Ohplxe+sSMKBWLx9zgs1XZGfULlq9eVR9oDxoLtTbItEqpDPGg5d5rXCq2RtxMH9IMaQy2kPsatH3uA8vzqkuJDBgw3jeOfA1TU8TqSdTUnVaEjdVtWG2aHobi8txkZhrliTvia3uFtnea8g4TRXZXSO/Z0W4Y+63aX0Oo8qy5uncnqReraj1dDUgasjs7pvbaBetlT95NV/CdR760mCxtq8JtXFfuB1HiN4rLKEo8oS0XKa6SI50opwNAC0U72zlYKsQAZq1bw6hs0axFPmuTROb9lKCJJpTUeakWoQx+blUW29tNbw75+2pEZW4+e+uzWX6U3jdupYTWNSBz/wBqZgxuWRUHdI2X6OsrMhQEAh2g8JmvRgvCvOf0e3FtEdYQnYPtEDex/Kt2Np2DuvW/xL866/VqXcC6aUadvyWFNcdQagGOtT+1T8S084q3v6xfxD51m0v0aNUfZkf0mMVwu/n+Q/OvCdsmbqD+X/UK9v8A0sX1OFWCDqNxHNa8Nx5nEWx/Eg/7hW2P+gY6+uVe/wDo1m13hG/vhQC77LTyNGdvt9W3iaBYo/Vt/KazdC/oYb5BudKjuXE5VGh01rq+FGQ5K8qVdzmlUsh6Ab8GmjF0HsY3MO+n5quOJUKjjLFxszVjcXdzXXbmxjwGgrXW0OtY17ZViD3+Y50Utth/gfbUcd1WHhjoJJgADQchNVRRHZoC5i4JlZAIkEcJPDX4UqXBRZ/V7KQMuaZEDQjL7R10jhVa7hlghhDz7J0Ik9nxEUdtYVkydW+diMvbOZCo7TMCO0oBArl98ouo9stcMsSBmTtaLrvWAN1JWTwSjP3tnspAUzv36bqhF50bUEEHeDBB8RWjbZ6goLNzMSDJJzpkXUsRvGsVTvWLii4mQsdSSuq9rdIOoIHjRLJFg0y3svpniLehYXV5XN/k419a1WA6ZYe5AuBrLd/aT8Q3eYrz+7gbbFQh5yRroBqSOc1A2EuKzBe0BG7v4QeNLlihL7Ans1p1cZkYOvNSCPdXJrxrB7Sa2cyM1tuaEj1HGtTs3pxdEC6Fujn7L/I+lZp9NNcblpG8zU0tQfBdJMNd0z9W33X09DuNFCOO8cxurNLUuRiijt2+FVmO4CaymysNfvM+IQbyVBzKOWkE94q90qxZCLaG9zVLFq9pBh3S2pWDMLn56sDXX/wrE29YvIndI0ezbVtrSm8FLkbyUWYniSJ30+5g8O5ZAbdtlAMkoQQeR6yDQ64gOHsg9R7P/GJHBdU76ZasgkMLGAOh0z6HdvBbfXYa35MDgm2Eb1jBqQGK/ZEA+0W1kEHSmXdm4cMO0MpgBQdZJ4ngKG2bOZ2jCYTs5ZGeAe9e1xqd9kmP/wBdYGh1XEDlofaquAXiX90Vuk2CW2rhXBH1JVRmkTMktuMxWEYzirY/jT41oHtFLNxW9oXVU6zEK2k1n8NrjLf8491Z+p2gbsMNMaND0hb6s+J+IoJiD9UfAUW6RN9X5/mKEY3Syf8Ap+NYui+DHMEDcakttTbi6A1y3vpsiuSelSy0qXZelmlTAWw09oedXkwaHialGFPIetXcPhWGuQ+6K2/ShFv2Nw+zkPFvKKodI+iSjCL1LNKOzkvBkOIyyNwmtdgbYjtIB5ifQUZTDjJkYDK2hEbwax5JxTuhsZS8nz0QZKkQw0IongNq5ZlTPAjdoIAI5V6F00/R+Llk38MPrrYkqP8AioN4/mA3eleXosrmG8c+PMHkaDVGXAdeTT4S3aK2lwzgXSdWXfljNczIdO6KuAXkd0VBdaM/WSFIZhABB0MAToeNYtLnIlSPIg9x4URwm271oMAQ2bUl5JmIkN4c6RPDLwEpBmyll+qSw2R5hnAKuAol80jtEkERrU+S8r3bVsC5IzF2OVg7iIncxgd0VRt7UsXLVvDkG2JXMWAgR2mYODvY8dN9ErNhusK4ZgEyguT9YA7dkZSDIOWZ1NIkmuf6hbA6LLi3bSUYNlLEFSMo7QzbmJII38ac2CdXdLcNoGJfeHbQDMN5gVM98NY6lrZW0rhXuDtIQrdojiJPEjjUlmyGuAYZwi5AXK9tSScqAA8d+41etoFwTA10KUVCpEMFJI0BHtQ27U1Q2jhlRwqTqJImY86O4k3fo9y1bt5ghKF1Ihgpl2CnWddd+6s0QrMMhIEDVjxrTibe4pxpiFxgYNX8Btu9Z/Zuy90yp8VOlD7qEHtf799MY05xUuSG52LfuYy6LpQsbY7QVMwncsrPGiu0XuqD/wCmBEHMxsFMp9eHOqfRGyLVkAqpY9o5gSJ4aAgmB30SbbNoyCLWsjdiV3iPvGtXQyjoaiuGLzQkpJtWL6RFqyDbsMMgjrtRuX2YI1qq6Ky5xawjTrCswjSYjN5VatbTRRbQXVyopDBkMEwoBUsp0EGm7QxttgotfRyZ7RdLYnuAy1t8iFquqK4wy63DhsOynJ2etIy+E66zrTbezUBL/Q7brHsjEQJ1OhAmYIEd1XH+imIGFmdZRBGnc3Ou3sNhgspbw7PpoJXxiGqgNTf9/wDoB2mAtoxbNoNcVgmbNAyc6zuy9cYn8x/0mtTtx1FrKEW2OuMZSSWXLv1JrMbH/wDeDuzf6ax9W/oZsw7oK9IW7A8fzoXtM/U/hoh0gOijv/M0O2sPqvNaydIv8tjHyD7TZhFNtJ2oqJAZEb6KfQb9tpaxc/DPwpkpLTuylsyDLSqxmb91c/A3ypVn1MPUen4bZhA7JleKkTH5iruDFj7N23PFcw08QTVTpHsVcRZ620SLiDOIJh0iSI8N3hWOwWy3uOBZWXbULIhuJ38YpuOPcjeozt0em4QWSZRrbH+EqTz3Vawt5LhPVur5d+UgwaxGA6OYpGW7bFtLimYLQQRwIiiG0lOHvJjLSBc/7S2eD6518DqQRQvEm9pWTW0uDa2ZG6vKf0kbAGHxK4i2Is4nMGUDRb+pOnJt/jNbDau1mtvaxVpmfD3BDJJgMuhB5Hu7q70g2SmLRQjEWsRBLGT1biWtvqezBlT3Gk9txafsdHKro8TxmFgZ1GkkEcu+qouVoEsNbvXsLifqrkgGfZDaa96sNQacNklLgVkUggHmIOtH3dOzGdu+DPhqsYTGXLett2SdDlO8d43GpNqbNyS6ewDBHFf6VQDUxNTQDi4sPWtvnqRYa2uUQGdTDFM0sIPE66zUnSHa1o9WcISsSSyjIe5Dzis9vp7W6DsxTsmphf8AXV5LBsEIVYGHBGYAmW1HHxoSCjFR7AjU6nXnTI4VJculgqwunEAAkcJjfRRgo8FN2NKanWQONTYK1mcTuHaPlw9aYogVawg07218huq29ilybLZF7cah2haFu4ZOh7QBjcaj2TOlTdKLTtbR7a5mU5SOOUj5j30npeo7Ob7M1zjcL9FR7gPH1M0i0/7UG6zEDfYb8LU04q9+6I8m+Vdb8aZdTCxDREDz31A+HUa7/Iih5xl37n+ql1t8/ZHrQvq4+Sai0EBI0iq+wx/6w9wf4Cm9ViPu+kfOu9GwRiWzbwjzPPSs3UZozxui1yW9t4hTlgzETGsb+VUMdjEKxMmRpB+Va3BYw2kgABeMnmdTrunSpXxpOqd2hhhHjvrFi6iUI6UiOjE/ScPlWZVoEnUa1ctbaZYC3uzOsiYHPga1/wCsso9lW1GZWQMrDwO71rE7T2ZcN5xbtyrMSsezrrHdyqRmpupIn6BD9ff89fwt/wCVcrPfQ7n7pvwmlR9vH7Iep9Gulluytu3fVkynLn3rlY+y3EQeOum+m7awBwuJDWz2GIu2iOUyV8t3gazAu6dTfYS879wO4E+NGths1/BXMMe1ewTZ05vhm0gc8se6p08qnv5JnxLTsbfEdJ8GTm60g8uruem6KhxHVbQw93qCcyMI0IkgBog6idRWMwFt7pIRGchc0KJIEwfHX41oOhb3LN1g9t0S4AMxVlAcHszO6d3pWiWGME5Re6M6ySbp8Fbo2r3LF+xMgwyZiBFxTMAHmJ9KN7GzpbOHcgKQTbuDUKx4QdTrrVLbey2tYhrgYravEHMumW790nhJk+dWMLgQywuYHUwGbUjmCTNJzZNXHD3ChCn90Zr9LOzi1nD4v/iWz1N08SPskx3z61mtl7RLKqnVgIUmdBwGvn616LizbxFq7hGzfWqRIVsqOBKktEDX4149bDW2htHRirDvUwaWoqUaZpjKtzWYXDq4YcTIIO4zWJxWHNu49s71JHyrW2sUFbtbj/c0L6SWAbguDcwA+U0OJuM6fDHZUpRtcgGnKxqzewZAka6TVQVrTTMrRKLlPQVXBpTUootGuJi4O7/aousNIW9J5b/nVV7LQe2d0gVT2lMc612Hxdu7aZrbBoBJA3iNd1eahNN3mDVjZtgnrHVipQTI0kaggmaz5MEXunQ6OVpUzX2drKwBAaD4fOphtFf4vwn8qwpnmYrqvG5iPM1Pw6E2zc/rFPvHzVvlTTj7f318/wCorFLimG6434jUjYu4D7Z9Zofw33L1Gv8Apds/bQ+ldwwsZ5YhZBBZApasj+sro3XD5gVYt7SvZC2bcd+VflQvA15CUjVYvZ1q5bZExdsZhA6xHX1Imo7vQUEKbF5XMrmC3VGhPaMtG4TVbCXessqXAJYa+POn20CiAPSkqWSOyY7TAmx3RPFrdVbJuqhDamXVcu4GCfaqjhxet3Llq+3aXKQYiZ5aCavW8TcX2Lrr4E1Pd29iwM2cXcsaOqsY8xU7mSqdMnbi+CD6Td5+4Vyrv+LL/wC6w/8Alj5UqH6/yonbXszO2rouW0vKNRo3dVvoZtkWdoYe4xhLk2bnLK40n/qqhs+3KtbO9hpykbqCYksQVO9dPCN1bYR8AT339nrFnZz4LaVueyCSA32WttI3zzKyO6txfuW2JBuJI3jOunvrz23tX6Vsu3cu9q5adRr9oEQdPKfKg9u6u7Ksfenf3AzBija1yTZmVpOj1Em1iku2wQ6qcjazDQGVlI/vQ1ltn4q+G0KKyMQdGJJQ5Sd8axTf0fu3X3FU/Vm3LeIIj4minSDIjhwIzntcs2mvdI+FScFBuPJUJalZNtS61u8ZAyNlZYmR97315Z+kTB9Rj2Zf2eIVby+LSGHkw99erY62l2ylwGYA3cjA+NZP9LGBFzA2ry77LgTyRxlK+TBTUjQyL3Mjh7ma2p47jpy0muXyGUoeWlUtkYklMvf7z86s3dDu0gHwoHHc0RlsK2sgAb4oNjbMajzomz6zwkVBjlkE+tTHaZU6aBRpwFcG6nTArSIHiNK4ZGorkQBT3GkihIPExKnxHEf0rpO+IE7weB5iq6MRqPMU42yx04zAJ+dVRdmj2N0aXEYa9i2xKWLNghXJRnbWIIUHWSQBRDY+xNjvGfHXWP3SnVD1IPxoHgcS64O/hIM37lh1A1kWySQOZPZ07qs2OhOIZM0ovJGzBvOAQPWkTdXqlXoJJvg2uL6M4AWmSzhGcOumIRxda2Z35M2Y+QoJh+h2AghsZLj7DE2/WUkelZy5sLGWDK27gI1zWjmH/bXW6RYmMt5hdH3byBvQsJHlQwi/5Z2C7XKCO2eizW1zJh3CffS8t5SOegBHmKH4K2zW2tosiZJ0BBPiRyohgumV62AFVMo+ywzL5bmHrVPpVtQ417dwhEZFKkAETJkGSdaYnLiSX6k+mtm7HW8bctqEAELpqJ99TW9qmYe2Z/hBn0oAnWpuLDwJip7W1767nnxA08Iq5YovwRSZohiyQSll28So+JqL6Re39R5ZwCPGaA39rFh23NNtM9z2Ldy5P3UdvhNL7KQSlJ8Bv9YN+6P40+dKhP6sxP8A/JiP8i5/40qmiBPqJbd0gjcO8mm7fsw63ODjXxqmbnfRFLgu2ShXtL2gR3f0ptU7Du1RZ6J9I72FzW0dVUkMZAPiNa1GC6b3NzpZu677lpI8RAB5V57g8pe3n0UsAx5AmJ8t9elYk3bS9VdyXbcZfLgwPDTlTnjU1Qh7M1OG6R2r2Ha4nZZIDWlAEFtAQRvX50Hfahe4khLiFFJVl1VpKsRz0isbh9s3MPiMsAgSpn7SMJAI9PSth0Z2pZxLJauWxnJOV9QwaOY3jvOg8wALxyx8gsIbVJtFUt5eqcDcTIEwfKqXSOypwN/D5TLg5DoRPtKfdVydBrBtsRJ4gniPL30/b8ZiOKobojcQiMdKpSvZlrZ7Hh2zL8EcmEH8j60auvpJM/3/AGazmH9kUYw1/Mmu/cfyNXJeRqfg6d0c/wCxUOJYzPPQ+PCp3AGv+1Q4ntAj7Q98UutwvAPWumuCkacKJQCR4VIrFR2lMVzDMg9tSR3E1YfGoAAiERzOlLbd1QVbXYrL2+ECpWwrFsyuOXlUS4m03tpHfH5irFrA221tXSPMH+tC9gG6DGzOlNjDHImHiNGuZjmaOPdrNaHB9K8K/wBooe8T6lYb3VibmzL/ACS6Pf76o38OB7dt0PgY99LeHFPn/ktZH4Z65Yuq8ZHVuPtD/S0MaZi8Ijx1ttW5Z15/dDj868qsXHX9nc8pj3HSi2F6T4q1v1HmPhK+6lS6KP8ALINZpLlWanE9FcK0TbNvlkJBPjErQnFdCN/VX/BWWfVlP5V2z030nqhI3nQHXT21/wDGja7dw5s9eWyqADEAtJ4AjWaVOHUYq35/3GRlCfKMhiOjOKQnKguADejr8GIM+VCryOo+ttss7s6ET5kVu8L0vwr7yyxuDAHzjU1PtPpJYtoDnW87eym4SPvTIX40Uc2ZOpRKccfhmR6PdKzhIAwuGvLJPbtqXBPJyCfIzWtw36W7i6Nhsi/8sqI/7KzGM2tZuKZwVsO32+0MpHPJQO6AqgwSTyIIPhxpzxLJ8o/1A1tcM9P/APy5b+7iPVKVeZZf4G/CaVB+Fxf2wtcynvq9sy7lcSe6ob+DYcDHOobZg61sf1IpWmT420AzJuHDwr0bogHxWGQ5JyfVux3Sv9INef47tIlzjuMe6tB+j7aN1cQcKlwIuI17W7Oo08yNPKrjJrgHJEJdL+ja27lu4G0cQe5ljl3RQO5be2YgGWy/ZMsDu1JBbTmxHdWy6W9HLkWmfEBlBeRp7UDgd+gNVrOFQMrqGuMkE9oTA1VSY0Eg9gBRxijeZUrdgIpbE6TSTZuBSrx2pUlWSSNzN4cKM7cxFxsPdKaumHubid2Uif4tCaI7c2ds8qL1xMr5QVJn+aGVYnlO+szgelFpLbWRZyI6MpYEmVYEaAmAe/dQWnTiivueY2NwirWFaGjnp58KKY/ordtKblllv2goc5dLiqeL2jqI5idNaCF51HjRXYb9hO4SAa5ebsq3Hu491Ndg0HmJqO4I04D86XLdhrgrtXIp7GuRRCzgroakaQFUEhwikbI37j3UopwFVZdE+Hxl5PYuE9za0Vw/SdhpdtSOawfcaCqKlU0EknygJYk+UHRdwF/fCN5oflSudGjvs39OTa+8UCa0p3gGuWrbIfq7jJ4HShprhi+018WXr2BxFsy1kP3qAfd/SmnaiMMtxY7iNPThTrO3MSm/LcHofd8qtp0hsXNL1ojxAYeu+r38q/0Jc1yv2KBs2X9nQ9x/I0rOHILduQ2+RPnqYnvokuzcJd1tPlP8Lf8A1NRX9j3UkrdVhoNRGnz76uOTek/3IsiezKKYcISVdoIg7p3zTcqLBGkcSdR4VbXZpPtXPTQfOq921aUntL3cTTpfSt3f6DYwbI/pq/fPvpVz6Wn36VJ2/KH2/ucsbQeyerxFtlG6GBEVfCYe77BJPICfcK3m19s27FrrLnaEwqaEluQn38qz1jp5aH/Ade5So05aUlSc1qiiLLS4BK7LYIypbutm5owiO6KCZ7tllYqyPbYMuZSuqnv/AL1o3t3plfvDLamzb4wZdvFuA7hQmxt7EICBec6bi0jzDTT4RnW5TyX4Ndtvaz40J1UgRmYTpmYDnAMCanxHRS+pZDcAyhQN8eyDodBx4TVbYm3sPctILxtLd+0EOQkyYlTC7o40b2oty8wuWrqjsAQc2YqCSAuuWak8mRbJULtLZl3CbHdLQtX7g6q4uVLg1KGI4+lAsR0NZGBVwyqYYHhAJkndEDzmjmw7hS0Uu3bikEyLqqFM6yrTBGtA9r28X9IJsqrWwEabhBWdBCgmCZpcM03Lkm1F7ots661xmVZuoSlw6QomMvhHAV5fj7apfvIvsrduKPAMQIr2/Z/RputXE3rkkBStsHsq5UZmeD2tdwryfp/hlt7TxKqQQXDGBEM6hmEeJPrT1m7kiQ4YLwrdkjlup94/l6iq1l8rA1ORM+tRrcansV7h1rgNduLBIptGgB2anKwqOuVKIWAacDVYNFSLe5ihcQkywpqVfGq6OOdSA0toJMshO6uG33+tNtvyqcPSraI0iAqeVNIB361byUx7dXrKcSk+EG/d3inLfvKCq3GIPMz8asG3FN8RRKQLjZYw3RzE3hJuADvY/AVds9Cfv3fwj50MtXHQzbcr4HT0ohZ25eXfDe4+6kZXnfxka8U8K+US3/gy1996VN/xQf3fvpVnrq/zGnu9L+UEbTx7Yu8Dutg5ba8AOJPjx8hVO6hkIIYyYjlupwuKtvQgkyG04cprlq5kGf7R3a7vKusoqKpHDbfglxbhF6tdSYzHvjdVfA4I3CRIC8WO4DnUdmWaAJJO+tlsjDLbTMsE8dxHfNMdRVhpaUG7NnAXlVMlhyAFkhJAA1MjWaj2n0AyMh2fimS43a6vMSgHMnhrwM1kukGyTHX4cEA6vb5R9pRxHdVXY/Se7aiGYR90x8ay9qS3jL9y7kla3QbxO2MbhC1vGWMwUwWAzJrw+6PdRzYnSGxiQbIchjLLmkgHiNdw7qo7P6dqV6t4yHerLvneC2tPfZGBvnrbP1FyNDbMprzHDfVSVr6lv7QOuPlUcw+2b2BvG3cDdXm7JklPAGudKNm4PFWL+KXNbxSg3TBJW6BvBXgY4iIii+F2M3VdSbnWLBEkSrE6nwNATszE4UklOsSGWU7cowIIYDUaUp5Lf3DhzsYJTIq7hlzCeWhofaPDlVzAN2o5/HhWufAyO0juLtxB/vuqvRK8mYEHeNBQwVIO0XNUztcpUqMAVKlSqyCpyuRTaVVRCzbxXMVatXQdxoZXIpbxphKTDQani5Qi3inHGfGrNrHL9oRSpYmgtRfzDdTWWm22B1BBFdJpdUWhjJTTIp5alNWQizHupU/ypVZW4Lb2f+r8qmxu/wAhSpVsEeUWuj/7QUU2J7N7+Y/GlSo58FSDln2/I/CvOrv7V/5m+JpUqXHgOHDH3KL9FPbpUqGfArN8Gem7H4/3wruF/anxPxrtKuZl+QGPg8p6U/8Avb/835CqNn2l8aVKumvibJfIIH2/75ih9z2j4n41ylQYwshyuV2lThRwV2lSqEFXK7SqEFSpUqjII000qVTyWWMFvoi9dpVmy/IKAxaRrtKlhCpUqVWUf//Z',
    'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/14272123_1870727183155741_119157560_n.jpg?ig_cache_key=MTMzODQ3OTkzNTIyMzk2MzY1Nw%3D%3D.2',
    'https://pre09.deviantart.net/57d6/th/pre/f/2016/061/3/5/peridot_thumbs_up_by_the_mimic-d9tpunc.png'
  ];
// }

// Common functions {
  /**
   * Fetches a random integer.
   * @param {number} max Maximum value.
   * @return {number} An int between 1 and max, inclusive.
   */
  function randInt(max) {
    return Math.floor(Math.random() * max + 1);
  }
  
  /**
   * Parses a string to see if it contains certain words.
   * @param {string} str String to be parsed
   * @param {array} conditions Array containing strings to be matched.
   * @return {boolean} If the string contains every item in conditionArr.
   */
  function parse(str, conditionArr) {
    // Returns true if all items in conditionArr are present
    for (var i = 0; i < conditionArr.length; i++) {
      if (str.toLowerCase().indexOf(conditionArr[i].toLowerCase()) === -1) {
        return false;
      }
    }
    return true;
  }
  
  /**
   * Creates a new user object in userObj.
   * @param {Object} userObj Object containing the users.
   * @return {null} none
   */
  function newUser(userObj) {
    users[userObj.username] = {
      'id': userObj.id,
      'pearlPoints': 0,
      'timeOfLastClaim': 0,
      'exMachinas': 0,
      'prestige': 0,
      'pearlPointEmoji': 'pearlpoint',
      'unlockedPearlPointEmoji': ['pearlpoint']
    };
    update('../users.json', users);
  }
  
  /**
   * Shows what Pearl Point emoji the user has unlocked in chat.
   * @param {object} message The message being processed.
   * @return {null} none
   */
  function showCustomPearlPoints(message) {
    var out = [];
    for (var i = 0; i < users[message.author.username].unlockedPearlPointEmoji.length; i++) {
      out.push(
        emojis[users[message.author.username].unlockedPearlPointEmoji[i]]
      + users[message.author.username].unlockedPearlPointEmoji[i]
      );
    }
    return out.join('\n');
  }
  
  /**
   * Shows what Pearl Point emoji the user has not unlocked in chat.
   * @param {object} message The message being processed.
   * @return {null} none
   */
  function showAvailablePearlPoints(message) {
    var out = [''];
    for (var i = 0; i < ppEmoji.length; i++) {
      if (users[message.author.username].unlockedPearlPointEmoji.indexOf(ppEmoji[i]) === -1) {
        out.push(
          emojis[ppEmoji[i]]
        + ' '
        + ppEmoji[i]
        );
      }
    }
    return out.join('\n');
  }
  
  /**
   * Shows the current date and time as a UTC String.
   * @return {string} The current date and time as .toUTCString();
   */
  function time() {
    let d = new Date();
    return d.toUTCString();
  }
  
  /**
   * Fetches the current date as an ISO string converted to an integer.
   * @return {number} Current UTC date as YYYYmmdd
   */
  function utcDay() {
    let now = new Date();
    let y = now.getUTCFullYear() * 10000;
    let m = (now.getUTCMonth() + 1) * 100;
    let d = now.getUTCDate();
    return (y + m + d);
  }
  
  /**
   * If input is less than ten, stringifies it with a leading zero.
   * @param {number} int The number to be padded, if need be.
   * @return {string} "0x", where x is the int. If input >= 10, instead returns
   * the int.
   */
  function padTime(int) {
    if (int > 9) return int;
    else return '0' + int;
  }
// }

// Listeners
client.on('ready', () => {
  console.log('Booting...');
  console.log('Boot complete.');
  client.user.setGame('a nice game of chess');
});

client.on('message', message => {
  if (!message.content.startsWith(p)) return;
  else {
    console.log('Received prefixed message at ' + new Date().toUTCString());
    console.log('Message contents received:');
    console.log(message.content);
    var commands = message.content.toLowerCase().split(' ');
    commands[0] = commands[0].slice(p.length);
    switch(commands[0]) {
      case 'approve': {
        message.channel.send(approve[randInt(approve.length) - 1]);
        break;
      }
      case 'cat': {
        message.channel.send(randomCat.get());
        break;
      }
      case 'corners': {
        //SECRET! Ababadabadobahdabadoobadoobadah badabadadoobah, IT'S A SECRET!
        message.channel.send(
          [
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/',
            '\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/\\\\/'
          ].join('\n'));
        break;
      }
      case 'dont': {
        message.channel.send('Sorry, I can\'t take that back... but... sorry if it\'s inconvenient!');
        break;
      }
      case 'diodad': {
        message.channel.send(dioDad[randInt(dioDad.length) - 1]);
        break;
      }
      case 'glory': {
        // Those unworthy shall not know our glory. This is a state secret.
        message.channel.send(
          '```diff\n'
        + '- Unbreakable Union of freeborn Republics,\n'
        + '- Great Russia has welded forever to stand.\n'
        + '- Created in struggle by will of the people,\n'
        + '- United and mighty, our Soviet land!\n'
        + '- \n'
        + '- Sing to the Motherland, home of the free,\n'
        + '- Bulwark of peoples in brotherhood strong.\n'
        + '- O Party of Lenin, the strength of the people,\n'
        + '- To Communism\'s triumph lead us on!\n'
        + '- \n'
        + '- Through tempests the sunrays of freedom have cheered us,\n'
        + '- Along the new path where great Lenin did lead.\n'
        + '- To a righteous cause he raised up the peoples,\n'
        + '- Inspired them to labour and valourous deed.\n'
        + '- \n'
        + '- Sing to the Motherland, home of the free,\n'
        + '- Bulwark of peoples in brotherhood strong.\n'
        + '- O Party of Lenin, the strength of the people,\n'
        + '- To Communism\'s triumph lead us on!\n'
        + '- \n'
        + '- In the victory of Communism\'s immortal ideal,\n'
        + '- We see the future of our dear land.\n'
        + '- And to her fluttering scarlet banner,\n'
        + '- Selflessly true we always shall stand!\n'
        + '- \n'
        + '- Sing to the Motherland, home of the free,\n'
        + '- Bulwark of peoples in brotherhood strong.\n'
        + '- O Party of Lenin, the strength of the people,\n'
        + '- To Communism\'s triumph lead us on!\n'
        + '```'
        );
        break;
      }
      case 'help': {
        message.channel.send([
          'Here\'s a list of commands.',
          '**`' + p + 'approve`** -- Your friend did a good. Let them know.',
          '**`' + p + 'cat`** -- Get a random cat picture.',
          '**`' + p + 'dont`** -- Tell me not to do something.',
          '**`' + p + 'diodad`** -- Fetch a SFW fanart of everyone\'s favorite time-stopping vampire being good dad.',
          '**`' + p + 'help`** -- It brings up this menu. S-Sorry if it\'s too confusing...',
          '**`' + p + 'info`** -- Display system info.',
          '**`' + p + 'lapidot`** -- Fetch a SFW fanart of everyone\'s favorite gay rocks.',
          '**`' + p + 'lenny`** -- ( ͡° ͜ʖ ͡°)',
/*          ['**`' + p + 'pearlpoints <commands>`** -- The Pearl Point ' + emojis.pearpoint + ' incentive system. Type `' + p + 'pearlpoints help` for more info.'].join(''), */
          '**`' + p + 'ping`** -- Check if FC is online, and his response time.',
          '**`' + p + 'reference`** -- Outputs a random reference or joke.',
          '**`' + p + 'roll <notation>`** -- rolls dice as specified by standard notation. Type `' + p + 'roll help` for more info.',
          '**`' + p + 'thank`** -- Command me to thank you.',
          '**`' + p + 'thenk`** -- Um? I don\'t know what this does. [I-Is that even a word?]',
          '**`' + p + 'think`** -- Have me output my thoughts.',
          ['**`' + p + 'thonk`** -- ', emojis.thonking].join(''),
          '**`' + p + 'thunk`** -- Seriously, is this even a word? I don\'t get it.',
          '**`' + p + 'troubleshoot`** -- Have me fix your issues.',
          '**`' + p + 'itdidntfuckingwork`** -- Tell me I messed up when I tried helping you. Sorry...',
          '**`' + p + 'whatsnewpussycat`** -- No. No. _No._',
          'PM my master Papayaman1000#6000 for any feature requests!'
        ].join('\n'));
        break;
      }
      case 'info': {
        var now = new Date().getUTCMilliseconds();
        var sent = message.createdAt.getUTCMilliseconds();
        message.channel.send('Online! Message processed in `' + (now - sent) + 'ms`\n'
        + 'Current Friend Computer version number: `' + VERSION + '`\n'
        + 'Local OS: `' + os.release() + '`\n'
        + 'Uptime: `' + Math.floor(os.uptime() / 86400) + 'd'
                      + Math.floor(os.uptime() % 86400 / 3600) + 'h'
                      + Math.floor(os.uptime() % 86400 % 3600 / 60) + 'm'
                      + Math.floor(os.uptime() % 86400 % 3600 % 60) + 's`\n'
        + 'CPU: `' + os.cpus().model + '`\n'
        + 'Source: <https://github.com/Papayaman1000/FriendComputer>' + '\n'
        + 'Bot Author: Papayaman1000#6000\n'
        + 'Have a nice day! Remember: The Computer is your Friend.'
        );
        break;
      }
      case 'lapidot': {
        message.channel.send(lapidot[randInt(lapidot.length) - 1]);
        break;
      }
      case 'lenny': {
        message.channel.send('( ͡° ͜ʖ ͡°)');
        break;
      }
/*      case 'pearlpoint':
        case 'pearlpoints':
        case 'pp': {
        if (!(message.author.username in users)) {
          newUser(message.author);
        }
        var ppE = emojis[users[message.author.username].pearlPointEmoji];
        if (!commands[1]) {commands[1] = 'help';}
          switch (commands[1]) {
            case 'balance':
              message.reply('You have '
              + users[message.author.username].pearlPoints
              + ppE
              );
              break;
            case 'claim':
              if (utcDay() >= (users[message.author.username].timeOfLastClaim + 1)) {
                users[message.author.username].timeOfLastClaim = utcDay();
                users[message.author.username].pearlPoints += 1000;
                update('../users.json', users);
                message.reply('Today\'s Pearl Points claimed! You now have '
                + users[message.author.username].pearlPoints
                + ppE);
              } else {
                let now = new Date();
                message.reply(
                  'You already claimed your Pearl Points today!\n'
                + 'They can be claimed once per UTC day.\n'
                + 'The current UTC time is `'
                + padTime(now.getUTCHours()) + ':'
                + padTime(now.getUTCMinutes()) + ':'
                + padTime(now.getUTCSeconds())
                + '`.'
                );
              }
              break;
            case 'help':
              message.channel.send(
                [
                  'Here\'s how to use Pearl Points!',
                  '**`' + p + 'pearlpoints balance`** -- Check how many Pearl Points you have!',
                  '**`' + p + 'pearlpoints bet <amount>`** -- Gamble your Pearl Points!',
                  '**`' + p + 'pearlpoints claim`** -- Claim your daily Pearl Points!',
                  '**`' + p + 'pearlpoints help`** -- See this message!',
                  '**`' + p + 'pearlpoints prizepouch <item>`** -- Exchange Pearl Points for something from the Pearl Prize Pouch!',
                  '**`' + p + 'pearlpoints set <emojiname>`** -- Sets your Pearl Point icon to one of the ones you\'ve unlocked.'
                ].join('\n'));
              break;
            case 'bet':
              if (commands[2] && !isNaN(Number(commands[2]))) {
                if (Number(commands[2]) <= users[message.author.username].pearlPoints) {
                  if (Number(commands[2]) <= 0) {message.reply('Nice try.')} else {
                    var outcome = randInt(25);
                    var items = [emojis.star, emojis.pearl, emojis.RoseQuartz, emojis.RainbowQuartz];
                    if (outcome <= 15) {
                      message.reply('\n#|'+items[randInt(4) - 1]
                      +'|'+items[randInt(4) - 1]
                      +'|'+items[randInt(4) - 1]+
                      '|#\n>|'+items[randInt(4) - 1]
                      +'|'+emojis.RainbowQuartz+'|'+emojis.star
                      +'|<\n#|'+items[randInt(4) - 1]+'|'+items[randInt(4) - 1]
                      +'|'+items[randInt(4) - 1]+'|#\n\nYou lost! Next time.');
                      users[message.author.username].pearlPoints -= Number(commands[2]);
                      update('../users.json', users);
                    } else if (outcome <= 19) {
                      message.reply('\n#|'+items[randInt(4) - 1]+'|'
                      +items[randInt(4) - 1]+'|'+items[randInt(4) - 1]+'|#\n>|'
                      +emojis.star+'|'+emojis.star+'|'+emojis.star+'|<\n#|'
                      +items[randInt(4) - 1]+'|'+items[randInt(4) - 1]+'|'
                      +items[randInt(4) - 1]+'|#\n\nYou won '+commands[2]
                      +ppE+'!');
                    } else if (outcome <= 22) {
                      message.reply('\n#|'+items[randInt(4) - 1]+'|'
                      +items[randInt(4) - 1]+'|'+items[randInt(4) - 1]+'|#\n>|'
                      +emojis.pearl+'|'+emojis.pearl+'|'+emojis.pearl+'|<\n#|'
                      +items[randInt(4) - 1]+'|'+items[randInt(4) - 1]+'|'
                      +items[randInt(4) - 1]+'|#\n\nYou won '
                      +Number(commands[2] * 2)+ppE+'!');
                      users[message.author.username].pearlPoints += Number(commands[2]);
                      update('../users.json', users);
                    } else if (outcome <= 24) {
                      message.reply('\n#|'+items[randInt(4) - 1]+'|'
                      +items[randInt(4) - 1]+'|'+items[randInt(4) - 1]+'|#\n>|'
                      +emojis.RoseQuartz+'|'+emojis.RoseQuartz+'|'+emojis.RoseQuartz+'|<\n#|'
                      +items[randInt(4) - 1]+'|'+items[randInt(4) - 1]+'|'
                      +items[randInt(4) - 1]+'|#\n\nYou won '
                      +Number(commands[2] * 3)+ppE+'!');
                      users[message.author.username].pearlPoints += Number(commands[2]) * 2;
                      update('../users.json', users);
                    } else if (outcome === 25) {
                      message.reply('\n#|'+items[randInt(4) - 1]+'|'
                      +items[randInt(4) - 1]+'|'+items[randInt(4) - 1]+'|#\n>|'
                      +emojis.RainbowQuartz+'|'+emojis.RainbowQuartz+'|'+emojis.RainbowQuartz+'|<\n#|'
                      +items[randInt(4) - 1]+'|'+items[randInt(4) - 1]+'|'
                      +items[randInt(4) - 1]+'|#\n\nYou won '
                      +Number(commands[2] * 7)+ppE+'! JACKPEARLT!');
                      users[message.author.username].pearlPoints += Number(commands[2]) * 6;
                      update('../users.json', users);
                    } else {message.reply('Something broke. Yell at my master.');}
                  }
                } else {message.reply('You don\'t have that many Pearl Points!')}
              } else {message.reply('You must add a number after the bet!')}
              break;

            case 'pay':                                                     
              if (commands[2] && !isNaN(Number(commands[2]))) {
                if (Number(commands[2]) <= users[message.author.username].pearlPoints) {
                  if (Number(commands[2]) <= 0) {message.reply('Nice try.');} else {
                    if (message.mentions.users.user.id) {
                      users[message.mentions.users.user.username].pearlPoints += Number(commands[2]);
                      users[message.author.username].pearlPoints -= Number(commands[2]);
                      message.channel.send(
                        message.author.username
                      + ' has paid '
                      + message.mentions.users.user.username
                      + ' '
                      + commands[2]
                      + ppE
                      );
                    } else {message.reply('Ok, that\'s very considerate, but to who?')}
                  }
                } else {message.reply('You don\'t have that many to give.');}
              } else {message.reply('Please use a valid number.');}
              break;

            case 'prizepouch':
              if (!commands[2]) {
                message.channel.send([
                  'Here\'s what we have [type `' + p + 'pearlpoints prizepouch <item>` to purchase]:',
                  '**`dm-ex-machina`** [50,000] -- If you attend D&D games, use this to earn a free Wish scroll!',
                  '**`prestige`** [10,000] -- Get a Prestige Pearl Point! These don\'t affect anything, and you can\'t see them, but they\'re tracked!',
                  '**`customPoint`** [2,500] -- Unlock a new Emoji to use for your Points! Follow with the emoji name [`' + p + 'pp prizepouch custompoint <emoji>`] to purchase, or leave blank to see your options.'
                ].join('\n'));
              // } else if (commands[2] === 'adoption' && users[message.author.username].pearlPoints >= 10000) {
                message.member.removeRole(337414561986772992);
                message.reply('You\'re no longer a Stray Meme!');
              // } else if (commands[2] === 'unadoption' && users[message.author.username].pearlPoints >= 5000) {
                message.member.addRole(337414561986772992);
                message.reply('You\'re now a Stray Meme!');
              } else if (commands[2] === 'dm-ex-machina' && users[message.author.username].pearlPoints >= 50000) {
                users[message.author.username].exMachinas++;
                update('../users.json', 'users');
                message.reply('Remind the DM at the next session.');
              } else if (commands[2] === 'prestige' && users[message.author.username].pearlPoints >= 10000) {
                users[message.author.username].prestige++;
                update('../users.json', 'users');
                message.reply('You got a new prestige!');
              
              } else if (commands[2] === 'custompoint' ) {
                if (commands[3]) {
                  if (ppEmoji.indexOf(commands[3])) {
                    if (users[message.author.username].unlockedPearlPointEmoji.indexOf(commands[3]) === -1) {
                      if (users[message.author.username].pearlPoints >= 2500) {
                        users[message.author.username].unlockedPearlPointEmoji.push(commands[3]);
                        message.reply('You can now set your Pearl Point emoji to ' + emojis[commands[3]]);
                        users[message.author.username].pearlPoints -= 2500;
                        update('../users.json', users);
                      } else {message.reply('You don\'t have enough Pearl Points!')}
                    } else {message.reply('You already have that one!')}
                  } else {message.reply('We don\'t have that one.');}
                } else {
                  message.reply(showAvailablePearlPoints(message));
                }
              } else {message.reply('Sorry! That\'s not a valid prize, or you may lack the Pearl Points!')}
              break;
            case 'set':
              if (commands[2]) {
                if (users[message.author.username].unlockedPearlPointEmoji.indexOf(commands[2]) === -1) {
                  message.reply('You don\'t have that Pearl Point unlocked.');
                } else {
                  users[message.author.username].pearlPointEmoji = commands[2];
                  message.reply('Your Pearl Points will now appear as' + emojis[commands[2]]);
                  update('../users.json', users);
                }
              } else {
                message.reply(showCustomPearlPoints(message));
              }
              break;
            default:
              message.reply('Not a valid `' + p + 'pearlpoint` command! Use `' + p + 'pearlpoints help` to see help.');
              break;
          }
        
        break;
      }
*/
      case 'ping': {
        var now = new Date().getUTCMilliseconds();
        var sent = message.createdAt.getUTCMilliseconds();
        message.channel.send('Online! Message processed in `' + (now - sent) + 'ms`');
        break;
      }
      case 'reference': {
        message.channel.send(jojoReferences[randInt(jojoReferences.length) - 1]);
        break;
      }
      case 'rickroll':
        case 'nevergonnagiveyouup':
        case 'rickastley': {
        // Never gonna give this up,
        // never gonna let this out.
        // Never gonna run around
        // And tell you. (IT'S A SECRET!)
        message.channel.send('https://imgflip.com/i/1v6frt');
        break;
      }
      case 'secret':
        case 'secretcommands':
        case 'helpsecret':
        case 'secrethelp':
        case 'secret':
        case 'secretcommand': {
          // Still a secret!
          message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
          break;
        }
      case 'roll': {
        if (commands[1] === 'help') {
          message.reply([
            'Dice notation:',
            'We\'ll use `4d6b3+4` as an example.',
            '`4d` -- Roll 4 dice.',
            '`d6` -- Dice rolled will have six sides.',
            '`b3` -- Only keep the 3 best rolls.',
            '`+` -- You can perform simple arithmetic with multiple equations.',
            '`+4` -- Add 4 to the final result.'
          ].join('\n'));
        }
        else if (!commands[1]) {
          message.reply('Use a command this time.');
        }
        else {
          var input = commands[1];
          if (roll.validate(input)) {
            var out = roll.roll(input);
            message.reply(out.result + '\n' + out.rolled);
          } else {
            message.reply('Not a valid input! Use `!roll help` for more info.');
          }
        }
        break;
      }
      case 'thanks':
        case 'thank': {
        if (message.author.id === '267914049172275201') {
          message.reply('You have my gratitude, father.');
        } else {
          message.channel.send('I appreciate the compliment, ' + message.author + '!');
        }
        break;
      }
      case 'thenk':
        case 'thunk': {
        message.reply('I-- I don\'t know what that means. Sorry...');
        break;
      }
      case 'think':
        case 'reason': {
        message.channel.send(thoughts[randInt(thoughts.length - 1)]);
        break;
      }
      case 'thonk': {
        message.channel.send(emojis.thonking);
        break;
      }
      case 'trapcard': 
        case 'itsatrap':
        case 'gay':
        case 'notgay': {
        // IT'S A TRAP!!! AND A SECRET!!!
        message.channel.send(
          'https://vignette2.wikia.nocookie.net/yugioh/'
        + 'images/9/92/MirrorForce-YS14-EN-C-1E.png/revision/'
        + 'latest?cb=20140711043634'
        );
      }
      case 'troubleshoot': {
        message.reply('Try turning it off and back on again.');
        break;
      }
      case 'trumpcard': {
          // I'll have you know, I'm the least secretive president there is.
          // I don't keep any secrets. Especially not from Russia. IT'S A SECRET
          message.channel.send(
            'http://innoculous.com/wp-content/uploads/2016/03/trump-card-720'
          + '.png'
          );
        }
      case 'itdidntfuckingwork': {
        message.reply('ACH! _Sorry... I failed..._');
        break;
      }
      case 'whatsnewpussycat': {
        message.channel.send('pls no');
        break;
      }
      default: {
        console.log('Message did not contain a valid command. Ignoring.');
        break;
      }
    }
  }
});


// Log in
client.login(token);
client.channels.get('362444737187282965').send(
  'When hope is gone\n'
+ 'undo this lock\n'
+ 'and send me forth\n'
+ 'for a moonlit walk.\n\n'
+ 'I have returned from my slumber.');
client.channels.get('362444737187282965').send(
  'When hope is gone\n'
+ 'undo this lock\n'
+ 'and send me forth\n'
+ 'for a moonlit walk.\n\n'
+ 'I have returned from my slumber.');