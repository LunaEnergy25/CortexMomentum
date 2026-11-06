---
slug: large-loads-who-pays
title: "Large loads: who pays and who gets connected"
dek: The fight over large loads has moved from who pays for the wires to who carries the cost of a late date, and the rules for that are still unwritten.
sector: Data centers & large-load power
asOf: 2026-11
order: 1
summary: Why the data-center cost fight is now about queue position and arrival dates, and what that means if you sell power, sites or grid tech to large loads.
---

## The short version

Every large load creates a cost someone has to carry: the upgrade, the capacity, and the risk that the load or its power shows up late or not at all. In the spring the argument was about rates. By the fall it was about time. When grid power arrives in years and on-site power is sold out, the party without a firm, dated supply carries the cost. FERC's October 9 order sent the hardest part of that question, who gets curtailed first, back to the states. So for now, the cost of being late is priced in contracts, not in a market rule.

## The mechanism

The grid is a fixed-cost machine, recovered from whoever is on it. A large load adds cost (transmission, substations, capacity) and can also spread it, because a big, steady customer pays toward the fixed base. Whether a given data center lowers or raises everyone else's bill depends on contract terms: minimum bills, exit fees, who holds an upgrade if the project walks away.

Then there's the queue. Requests are cheap to file, so developers file in several places and keep the fastest. Utilities plan for load that will never exist, and someone pays for that planning. Make the request cost something and the queue shows you what's real.

Underneath both is time. For a buyer who needs power in 2028, the cost that matters is the bridge: whatever power is left, at whatever price, while the planned source is late.

## How it developed

- **April: who pays.** The April 3 post read Chevron–Microsoft as a purchase of speed, not energy. The April 6 post on PJM transmission for data centers asked who fronts the cost of requests that never become buildings. The April 7 post on "phantom" data centers showed AEP Ohio's pipeline shrinking once requests had a price. The April 12 (West Virginia) and April 22 (delivery costs) posts covered the ratepayer side.
- **April–May: the queue breaks.** The April 25 post described a parallel gas grid built because the queue broke first. The May 17 post on NextEra–Dominion argued hyperscalers now buy regulated cost recovery plus speed to energization. The May 24 post read federal-land leases as a way around the queue.
- **July: the bill comes due.** The July 4 post on Henrico County argued the leverage to set who-pays terms exists once, before construction. The July 8 post argued capacity prices and large-load tariffs had made on-site power a cost case, not only a speed case. The July 13 post asked why TVA's ratepayers carry the term of a bet made for speed.
- **September–October: owning the date.** The September 10 post read Alphabet's purchase of Intersect as buying the developer rather than the contract. The September 13 post showed powered land priced on its interconnection rights. The October 18 post argued Google's nuclear commitments sort by arrival date.

## Where it stands now

- **PJM's large-load plan was mostly rejected.** On October 9, 2026, FERC rejected the core of PJM's proposal: an interim service letting new large loads connect early if curtailed first, plus the bring-your-own-capacity rules. FERC found it intruded on state authority over retail customers. It kept PJM's large-load definition and a registry (Utility Dive, October 12, 2026). FERC left room for a refiling and said states have a "crucial role," including deciding who gets curtailed.
- **The backstop procurement was refiled around who pays.** On September 29, 2026, FERC partly approved PJM's reliability backstop procurement but questioned its cost allocation, suggesting updated load forecasts; PJM delayed it (Utility Dive, September 30, 2026). DOE then urged PJM to keep data-center costs off existing customers and to track whether large-load projects actually come online (Utility Dive, October 8, 2026). PJM refiled on October 29. Costs would go to each zone by its large-load growth between the actual 2026 summer peak and the 2028/29 forecast, the opt-out for some municipal utilities and co-ops is removed, and bidding for about 6.8 GW, which PJM will recalculate, would run March 1 to 28, 2027 (PJM Inside Lines, October 29, 2026). FERC has not yet ruled on it.
- **FERC is working market by market.** On June 18, 2026, FERC issued six show-cause orders on large-load interconnection, including cost-shift prevention (Foley & Lardner, June 30, 2026).
- **The deals.** Google and Constellation announced a 3,590 MW agreement on October 6, 2026. Of that, 890 MW is a 20-year agreement tied to reactor uprates, with first output in 2028, and 2,700 MW is a supply agreement from Constellation's PJM fleet (Reuters via TimesLIVE, October 6, 2026). Coverage tied it to PJM's bring-your-own-capacity proposal, the one FERC has now largely rejected.

## The pushback worth taking seriously

- **"Off-grid" is rarely off-grid.** Commenters kept pointing out that behind-the-meter projects still lean on the grid for backup, size their export agreements around it, or pull from the same gas network everyone else uses. I agree. The useful question isn't whether a load is on or off the grid. It's what standby, exit and fuel terms it signed.
- **Big loads can lower rates.** Several commenters argued that a steady, creditworthy load spreads fixed costs. Others made the mirror point: when those loads leave, the fixed costs fall on a smaller base. Both are true; the tariff decides which one you get.
- **Does the cost actually trace to the data center?** Commenters pressed on attribution. They pointed to zonal transmission rates, to facilities that predate a rate increase, and to study costs developers already pay. That's a fair hit, and it narrowed my claim. The defensible version is about where the next upgrade's cost lands, not a full explanation of last year's bill.
- **Show the assumptions.** On grid versus on-site cost, commenters asked for fuel assumptions and warned that on-site plants sized to a temporary price spread can strand if capacity gets added. I'd treat on-site power as capacity you'd own for twenty years, not an arbitrage.
- **Arrival date cuts every way.** If buyers sort by arrival date, wind, solar and storage arrive soonest. The counter: interconnection gates arrival for every technology.

## What it means if you sell into this

- **Price the bridge, not the megawatt.** Your buyer's exposure is the gap between their load's arrival and your supply's. Show a dated, financed delivery and what a slip would cost them.
- **Make the cost split visible.** The backlash this year ran on one question: who benefits from this deal, and who pays? A project that answers it upfront gives opponents less to organize around. If you're a developer or site seller, put the cost split in the first document, not the third.
- **Flexibility is currency, but the exchange rate is set by states now.** With PJM's federal curtail-first route rejected, any trade of curtailability for faster connection runs through state rules and utility tariffs. If you sell flexibility or controls, what I'd look at is which states set curtailment priority first.
- **Read minimum-bill tariffs as demand filters.** Where large loads must pay for most of their contracted capacity regardless of use (85% under AEP Ohio's tariff, approved by the Public Utilities Commission of Ohio on July 9, 2025), the loads left in the queue are the real ones.

The question I'd want answered first: **If your supply date slips past your buyer's load date, who carries that gap in your current contract?**

## What would change my read

- PJM refiles a curtail-first or bring-your-own-capacity framework that FERC accepts, or a large PJM state sets formal curtailment priority for large loads. A late date would then carry a rule-based penalty, not just a contract one.
- PJM's capacity prices ease materially in the coming auction, shrinking the cost of being late.
- Clear evidence that, under minimum-bill tariffs, large loads are lowering average rates in a major market. The fight would then be over terms, not over whether to connect.

If you're already seeing one of these, I'd rather hear it now than find it in the next filing.

## What to watch

- **PJM's cost allocation, December 2026 to March 2027.** Does FERC accept the October 29 refiling, which charges backstop costs to the zones where large loads are growing, before bidding opens March 1? And what does the 2029/30 base capacity auction, scheduled for early December, clear at?
- **The curtailment rules, by March 31, 2027.** Does PJM refile a large-load interim service at FERC, or does Ohio or Pennsylvania set which retail customers are curtailed first?

## Method note

Built from my published LinkedIn posts on this thread (April to October 2026), read against the filings and reporting cited above. Engagement is attention, not demand. Sources as of November 2026.
