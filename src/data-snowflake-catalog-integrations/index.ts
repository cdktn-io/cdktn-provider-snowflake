/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataSnowflakeCatalogIntegrationsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#like DataSnowflakeCatalogIntegrations#like}
  */
  readonly like?: string;
  /**
  * (Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS. The output of describe is saved to the description field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#with_describe DataSnowflakeCatalogIntegrations#with_describe}
  */
  readonly withDescribe?: boolean | cdktn.IResolvable;
}
export interface DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication {
}

export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationToTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationToHclTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference {
    return new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication {
}

export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationToTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationToHclTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oauth_allowed_scopes - computed: true, optional: false, required: false
  public get oauthAllowedScopes() {
    return this.getListAttribute('oauth_allowed_scopes');
  }

  // oauth_client_id - computed: true, optional: false, required: false
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }

  // oauth_token_uri - computed: true, optional: false, required: false
  public get oauthTokenUri() {
    return this.getStringAttribute('oauth_token_uri');
  }
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference {
    return new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig {
}

export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigToTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigToHclTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_delegation_mode - computed: true, optional: false, required: false
  public get accessDelegationMode() {
    return this.getStringAttribute('access_delegation_mode');
  }

  // catalog_api_type - computed: true, optional: false, required: false
  public get catalogApiType() {
    return this.getStringAttribute('catalog_api_type');
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // catalog_uri - computed: true, optional: false, required: false
  public get catalogUri() {
    return this.getStringAttribute('catalog_uri');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference {
    return new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication {
}

export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationToTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationToHclTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sigv4_iam_role - computed: true, optional: false, required: false
  public get sigv4IamRole() {
    return this.getStringAttribute('sigv4_iam_role');
  }

  // sigv4_signing_region - computed: true, optional: false, required: false
  public get sigv4SigningRegion() {
    return this.getStringAttribute('sigv4_signing_region');
  }
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference {
    return new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput {
}

export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputToTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputToHclTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bearer_rest_authentication - computed: true, optional: false, required: false
  private _bearerRestAuthentication = new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList(this, "bearer_rest_authentication", false);
  public get bearerRestAuthentication() {
    return this._bearerRestAuthentication;
  }

  // catalog_namespace - computed: true, optional: false, required: false
  public get catalogNamespace() {
    return this.getStringAttribute('catalog_namespace');
  }

  // catalog_source - computed: true, optional: false, required: false
  public get catalogSource() {
    return this.getStringAttribute('catalog_source');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // glue_aws_role_arn - computed: true, optional: false, required: false
  public get glueAwsRoleArn() {
    return this.getStringAttribute('glue_aws_role_arn');
  }

  // glue_catalog_id - computed: true, optional: false, required: false
  public get glueCatalogId() {
    return this.getStringAttribute('glue_catalog_id');
  }

  // glue_region - computed: true, optional: false, required: false
  public get glueRegion() {
    return this.getStringAttribute('glue_region');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // oauth_rest_authentication - computed: true, optional: false, required: false
  private _oauthRestAuthentication = new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList(this, "oauth_rest_authentication", false);
  public get oauthRestAuthentication() {
    return this._oauthRestAuthentication;
  }

  // refresh_interval_seconds - computed: true, optional: false, required: false
  public get refreshIntervalSeconds() {
    return this.getNumberAttribute('refresh_interval_seconds');
  }

  // rest_config - computed: true, optional: false, required: false
  private _restConfig = new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList(this, "rest_config", false);
  public get restConfig() {
    return this._restConfig;
  }

  // sigv4_rest_authentication - computed: true, optional: false, required: false
  private _sigv4RestAuthentication = new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList(this, "sigv4_rest_authentication", false);
  public get sigv4RestAuthentication() {
    return this._sigv4RestAuthentication;
  }

  // table_format - computed: true, optional: false, required: false
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference {
    return new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput {
}

export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputToTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputToHclTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference {
    return new DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeCatalogIntegrationsCatalogIntegrations {
}

export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsToTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeCatalogIntegrationsCatalogIntegrationsToHclTerraform(struct?: DataSnowflakeCatalogIntegrationsCatalogIntegrations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeCatalogIntegrationsCatalogIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeCatalogIntegrationsCatalogIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeCatalogIntegrationsCatalogIntegrationsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference {
    return new DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations snowflake_catalog_integrations}
*/
export class DataSnowflakeCatalogIntegrations extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_catalog_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataSnowflakeCatalogIntegrations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeCatalogIntegrations to import
  * @param importFromId The id of the existing DataSnowflakeCatalogIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeCatalogIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_catalog_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations snowflake_catalog_integrations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeCatalogIntegrationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeCatalogIntegrationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_catalog_integrations',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.15.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._like = config.like;
    this._withDescribe = config.withDescribe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_integrations - computed: true, optional: false, required: false
  private _catalogIntegrations = new DataSnowflakeCatalogIntegrationsCatalogIntegrationsList(this, "catalog_integrations", false);
  public get catalogIntegrations() {
    return this._catalogIntegrations;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // like - computed: false, optional: true, required: false
  private _like?: string; 
  public get like() {
    return this.getStringAttribute('like');
  }
  public set like(value: string) {
    this._like = value;
  }
  public resetLike() {
    this._like = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeInput() {
    return this._like;
  }

  // with_describe - computed: false, optional: true, required: false
  private _withDescribe?: boolean | cdktn.IResolvable; 
  public get withDescribe() {
    return this.getBooleanAttribute('with_describe');
  }
  public set withDescribe(value: boolean | cdktn.IResolvable) {
    this._withDescribe = value;
  }
  public resetWithDescribe() {
    this._withDescribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDescribeInput() {
    return this._withDescribe;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      like: cdktn.stringToTerraform(this._like),
      with_describe: cdktn.booleanToTerraform(this._withDescribe),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      like: {
        value: cdktn.stringToHclTerraform(this._like),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_describe: {
        value: cdktn.booleanToHclTerraform(this._withDescribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
