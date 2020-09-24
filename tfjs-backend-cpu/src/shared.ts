/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// Shared functionality among backends.

// Kernel implementation functions.
export {addComplexImpl, addImpl} from './kernels/Add';
export {maxImpl} from './kernels/Max_impl';
export {multiplyComplexImpl, multiplyImpl} from './kernels/Multiply';
export {notEqualImpl} from './kernels/NotEqual';
export {squaredDifferenceImpl} from './kernels/SquaredDifference';
export {subComplexImpl, subImpl} from './kernels/Sub';
export {transposeImpl} from './kernels/Transpose_impl';

// Types.
export {ComplexBinaryKernelImpl, SimpleBinaryKernelImpl} from './utils/binary_types';
