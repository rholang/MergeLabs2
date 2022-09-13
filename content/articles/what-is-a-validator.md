---
index: 18
title: What is a validator?
description: Validators are special actors in the network responsible for adding new blocks of transactions to the blockchain.
alt: Article 10
author: 
  name: SAMUEL L. IPSUM
  bio: Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
  img: https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60
tags: 
  - blockchain
  - atom
---

Validators are special actors in the network responsible for adding new blocks of transactions to the blockchain. Anyone can declare themselves a validator candidate, but only 125 candidates can enter the set of active validators. Validator candidates are selected based on the amount of voting power associated with their operator account. Voting power is obtained when ATOM holders start staking in proportion of the amount of ATOM staked. This voting power must then be [delegated](/learn/faq/what-is-delegating) to one or multiple validator candidates. As a result, ATOM holders must select a validator when stake ATOM to earn rewards. 

To add blocks to the blockchain, validators electronically sign block proposals that are valid according to the protocol. The validator selection protocol selects the proposer of a given block of validators according to a specific algorithm. Validator selection rotates every block. Each signature is weighted by the voting power of the validator. A block is considered valid if it is signed by more than two thirds of validators and is weighted by their respective voting power.
