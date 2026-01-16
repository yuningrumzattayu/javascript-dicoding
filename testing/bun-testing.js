import { it, describe, expect } from 'bun:test';

describe('Fitur 1', () => {
  it('harus dapat A', () => {
    expect('A').toBe('A');
  });

  it('harus dapat B', () => {
    expect('B').not.toBe('A');
  });
});
s;
