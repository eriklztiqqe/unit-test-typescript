import {describe, expect, it, beforeAll, beforeEach} from '@jest/globals';
import * as pulumi from '@pulumi/pulumi';

function promiseOf<T>(output: pulumi.Output<T>): Promise<T> {
  return new Promise((resolve) => {
    output.apply(resolve);
  });
}

describe('Test infrastructure', () => {
  let infra: typeof import('./infra');

  beforeAll(() => {
    pulumi.runtime.setMocks({
      newResource: (args: pulumi.runtime.MockResourceArgs): {id: string, state: any} => {
        return {
          id: `${args.inputs.name}_id`,
          state: args.inputs,
        };
      },
      call: (args: pulumi.runtime.MockCallArgs): any => {
        return args.inputs;	  
      },
    });
  });

  beforeEach(async () => {
    infra = await import('./infra');
  });
  
  ////////////////// Actual tests here ////////////////////

});
