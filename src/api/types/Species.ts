import * as core from '../../core';

export const Species = {
  Dog: 'dog',
  Cat: 'cat',
  Bird: 'bird',
} as const;

export type Species = (typeof Species)[keyof typeof Species];

export const species = core.cast.identity<Species>();
