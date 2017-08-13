/**
 * Alert Grapher
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Alert {
    id?: string;

    count?: number;

    alias?: string;

    message?: string;

    status?: string;

    isSeen?: boolean;

    acknowledged?: boolean;

    snoozed?: boolean;

    createdAt?: number;

    updatedAt?: number;

    tinyId?: string;

    tags?: Array<string>;

    owner?: string;

    teams?: Array<string>;

    recipients?: Array<string>;

    entity?: string;

    details?: any;

    source?: string;

    description?: string;

    systemData?: models.SystemData;

}
