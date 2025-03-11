import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import pkg from './package.json' with { type: 'json' };

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react-native',
    'react-dom',
    'react-native-web',
    'react/jsx-runtime',
  ],
  plugins: [
    json(),
    alias({
      entries: [{ find: 'react-native', replacement: 'react-native-web' }],
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
    }),
  ],
};
