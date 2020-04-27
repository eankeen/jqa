import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/jqa.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    typescript(),
    terser(),
  ],
};
