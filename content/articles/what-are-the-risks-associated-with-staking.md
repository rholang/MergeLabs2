---
index: 13
title: What are the risks associated with staking?
description: Staking ATOM earns significant rewards, but is not risk-free.
alt: Article 10
author: 
  name: SAMUEL L. IPSUM
  bio: Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
  img: https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60
tags: 
  - blockchain
  - atom
---

Staking ATOM earns significant rewards but is not risk-free. ATOM delegated to a validator can be partially slashed if the validator misbehaves. Slashing means the delegated ATOM are forfeited (burned) without the possibility of recovery. On the Cosmos Hub, two attributable faults can lead to slashing events for the delegated ATOM:

- Slashing by 0.01% can occur if the validator is offline for too long. Uptime is achieved when the validator signs at least 500 out of the last 10.000 blocks. If a validator does not sign minimum 500 blocks out of the last 10.000, a downtime slash occurs. 
- Slashing by 5% can occur if the validator signs two different blocks at the same height (double-signing). This fault is harder to anticipate, resulting from bad operation practices or outright malicious intent from the validator operator. 

When you delegate your ATOM to a validator, select a trusted validator to prevent slashing from these faults.
