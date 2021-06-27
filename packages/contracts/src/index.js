'use strict';

/**
 * Contracts module
 *
 * @module contracts
 */

/*****************************************************************
 * Reflections
 ****************************************************************/

import MetaReflection, { META_REFLECTION_SYMBOL } from './reflections/MetaReflection';

import { Meta } from './reflections/meta/Meta';
import ClassMeta from './reflections/meta/ClassMeta';
import MethodMeta from './reflections/meta/MethodMeta';
import FunctionMeta from './reflections/meta/FunctionMeta';
import ParameterMeta from './reflections/meta/ParameterMeta';

import Builder from './reflections/builders/Builder';
import ClassBuilder from './reflections/builders/ClassBuilder';
import MethodBuilder from './reflections/builders/MethodBuilder';
import FunctionBuilder from './reflections/builders/FunctionBuilder';

/*****************************************************************
 * Support
 ****************************************************************/

import Stringable from './support/Stringable';

/*****************************************************************
 * Exports
 ****************************************************************/

export {
    // Reflections (Meta)
    MetaReflection,
    META_REFLECTION_SYMBOL,
    Meta,
    ClassMeta,
    MethodMeta,
    FunctionMeta,
    ParameterMeta,
    Builder,
    ClassBuilder,
    MethodBuilder,
    FunctionBuilder,

    // Support
    Stringable
};
