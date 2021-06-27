'use strict';

/**
 * Meta Reflections
 *
 * @module reflection-contracts
 */

import MetaReflection, { META_REFLECTION_SYMBOL } from './MetaReflection';

import { Meta } from './meta/Meta';
import ClassMeta from './meta/ClassMeta';
import MethodMeta from './meta/MethodMeta';
import FunctionMeta from './meta/FunctionMeta';
import ParameterMeta from './meta/ParameterMeta';

import MetaBuilder from './builders/Builder';
import ClassMetaBuilder from './builders/ClassBuilder';
import MethodMetaBuilder from './builders/MethodBuilder';
import FunctionMetaBuilder from './builders/FunctionBuilder';

export {
    META_REFLECTION_SYMBOL,
    MetaReflection,

    Meta,
    ClassMeta,
    MethodMeta,
    FunctionMeta,
    ParameterMeta,

    MetaBuilder,
    ClassMetaBuilder,
    MethodMetaBuilder,
    FunctionMetaBuilder
};
