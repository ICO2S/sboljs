
/*
 * Copyright (C) 2015 ICOS Group, Newcastle University.  All rights reserved.
 * Contact:  James Alastair McLaughlin <j.a.mclaughlin@ncl.ac.uk>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *  
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

"use strict";

var serializeModuleDefinition = require('./serializeModuleDefinition'),
    serializeCollection = require('./serializeCollection'),
    serializeComponentDefinition = require('./serializeComponentDefinition'),
    serializeModel = require('./serializeModel'),
	serializeImplementation = require('./serializeImplementation'),
    serializeSequence = require('./serializeSequence'),
    serializeGenericTopLevel = require('./serializeGenericTopLevel'),
	serializeAttachment = require('./serializeAttachment');

module.exports = function serializeJSON(sbolDocument) {

    var out = {};

    if(sbolDocument.collections.length > 0) {
        out.collections = sbolDocument.collections.map(function(collection) {
            return serializeCollection(sbolDocument, collection);
        });
    }

    if(sbolDocument.moduleDefinitions.length > 0) {
        out.moduleDefinitions = sbolDocument.moduleDefinitions.map(function(moduleDefinition) {
            return serializeModuleDefinition(sbolDocument, moduleDefinition);
        });
    }

    if(sbolDocument.models.length > 0) {
        out.models = sbolDocument.models.map(function(model) {
            return serializeModel(sbolDocument, model);
        });
    }

	if(sbolDocument.implementations.length > 0) {
        out.implementations = sbolDocument.implementations.map(function(implementation) {
            return serializeImplementation(sbolDocument, implementation);
        });
    }

    if(sbolDocument.componentDefinitions.length > 0) {
        out.componentDefinitions = sbolDocument.componentDefinitions.map(function(componentDefinition) {
            return serializeComponentDefinition(sbolDocument, componentDefinition);
        });
    }

    if(sbolDocument.sequences.length > 0) {
        out.sequences = sbolDocument.sequences.map(function(sequence) {
            return serializeSequence(sbolDocument, sequence);
        });
    }

    if(sbolDocument.genericTopLevels.length > 0) {
        out.genericTopLevels = sbolDocument.genericTopLevels.map(function(genericTopLevel) {
            return serializeGenericTopLevel(sbolDocument, genericTopLevel);
        });
    }

	if (sbolDocument.attachments.length > 0) {
        out.attachments = sbolDocument.attachments.map(function(attachment) {
            return serializeAttachment(sbolDocument, attachment);
        });
    }
  
    return JSON.stringify(out, null, 2);
}


