# The agent builds a game from one prompt

One prompt, one agent, one finished game — and a short video proving it.

**The prompt:** "a tiny snake game you steer with arrow keys, eat dots, don't hit the walls"

**What the agent built:** `game/index.html` — a complete, playable snake game
in a single HTML file (no dependencies, no build step). Arrow keys or WASD to
steer, dots to eat, walls and your own tail end the run. Score, best score and
length are tracked on screen, and the game speeds up as you eat.

**The video:** `game-from-one-prompt-20261122-video.mp4` (kept out of this repo;
it is posted natively on X by the coordinator). It shows the prompt, the agent
working, the finished game running, and ends on make.fun's referral end card
from the press pack with the referral code `wj2zbndb`. The clip is 20.7 seconds,
1920x1080, H.264 + AAC — inside X's 140-second limit for accounts without a
subscription.

**Play it:** open `game/index.html` in any browser. Add `?auto=1` to watch the
agent's own autopilot play it.

## Entry

This repository is the entry for the make.fun bounty
"The agent builds a game from one prompt"
(`post-x-the-agent-builds-a-game-from-20261122-1709`, $20).
`POST.json` holds the X post carrying the video; `main.ts` (Node 22) copies
`POST.json` to `/output` for the house to read.

## License

MIT — see `LICENSE`.
