/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ExternalVolumeConfig extends cdktn.TerraformMetaArguments {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether write operations are allowed for the external volume; must be set to TRUE for Iceberg tables that use Snowflake as the catalog. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#allow_writes ExternalVolume#allow_writes}
  */
  readonly allowWrites?: string;
  /**
  * Specifies a comment for the external volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#comment ExternalVolume#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#id ExternalVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for the external volume; must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#name ExternalVolume#name}
  */
  readonly name: string;
  /**
  * storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_location ExternalVolume#storage_location}
  */
  readonly storageLocation: ExternalVolumeStorageLocation[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#timeouts ExternalVolume#timeouts}
  */
  readonly timeouts?: ExternalVolumeTimeouts;
}
export interface ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation {
}

export function externalVolumeDescribeOutputStorageLocationsAzureStorageLocationToTerraform(struct?: ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeDescribeOutputStorageLocationsAzureStorageLocationToHclTerraform(struct?: ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_consent_url - computed: true, optional: false, required: false
  public get azureConsentUrl() {
    return this.getStringAttribute('azure_consent_url');
  }

  // azure_multi_tenant_app_name - computed: true, optional: false, required: false
  public get azureMultiTenantAppName() {
    return this.getStringAttribute('azure_multi_tenant_app_name');
  }

  // azure_tenant_id - computed: true, optional: false, required: false
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
}

export class ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList extends cdktn.ComplexList {

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
  public get(index: number): ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference {
    return new ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation {
}

export function externalVolumeDescribeOutputStorageLocationsGcsStorageLocationToTerraform(struct?: ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeDescribeOutputStorageLocationsGcsStorageLocationToHclTerraform(struct?: ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_kms_key_id - computed: true, optional: false, required: false
  public get encryptionKmsKeyId() {
    return this.getStringAttribute('encryption_kms_key_id');
  }

  // storage_gcp_service_account - computed: true, optional: false, required: false
  public get storageGcpServiceAccount() {
    return this.getStringAttribute('storage_gcp_service_account');
  }
}

export class ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList extends cdktn.ComplexList {

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
  public get(index: number): ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference {
    return new ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation {
}

export function externalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationToTerraform(struct?: ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationToHclTerraform(struct?: ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // encryption_kms_key_id - computed: true, optional: false, required: false
  public get encryptionKmsKeyId() {
    return this.getStringAttribute('encryption_kms_key_id');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export class ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList extends cdktn.ComplexList {

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
  public get(index: number): ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference {
    return new ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation {
}

export function externalVolumeDescribeOutputStorageLocationsS3StorageLocationToTerraform(struct?: ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeDescribeOutputStorageLocationsS3StorageLocationToHclTerraform(struct?: ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_kms_key_id - computed: true, optional: false, required: false
  public get encryptionKmsKeyId() {
    return this.getStringAttribute('encryption_kms_key_id');
  }

  // storage_aws_access_point_arn - computed: true, optional: false, required: false
  public get storageAwsAccessPointArn() {
    return this.getStringAttribute('storage_aws_access_point_arn');
  }

  // storage_aws_external_id - computed: true, optional: false, required: false
  public get storageAwsExternalId() {
    return this.getStringAttribute('storage_aws_external_id');
  }

  // storage_aws_iam_user_arn - computed: true, optional: false, required: false
  public get storageAwsIamUserArn() {
    return this.getStringAttribute('storage_aws_iam_user_arn');
  }

  // storage_aws_role_arn - computed: true, optional: false, required: false
  public get storageAwsRoleArn() {
    return this.getStringAttribute('storage_aws_role_arn');
  }

  // use_privatelink_endpoint - computed: true, optional: false, required: false
  public get usePrivatelinkEndpoint() {
    return this.getStringAttribute('use_privatelink_endpoint');
  }
}

export class ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList extends cdktn.ComplexList {

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
  public get(index: number): ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference {
    return new ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeDescribeOutputStorageLocations {
}

export function externalVolumeDescribeOutputStorageLocationsToTerraform(struct?: ExternalVolumeDescribeOutputStorageLocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeDescribeOutputStorageLocationsToHclTerraform(struct?: ExternalVolumeDescribeOutputStorageLocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeDescribeOutputStorageLocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalVolumeDescribeOutputStorageLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeDescribeOutputStorageLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_storage_location - computed: true, optional: false, required: false
  private _azureStorageLocation = new ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList(this, "azure_storage_location", false);
  public get azureStorageLocation() {
    return this._azureStorageLocation;
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // gcs_storage_location - computed: true, optional: false, required: false
  private _gcsStorageLocation = new ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList(this, "gcs_storage_location", false);
  public get gcsStorageLocation() {
    return this._gcsStorageLocation;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // s3_compat_storage_location - computed: true, optional: false, required: false
  private _s3CompatStorageLocation = new ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList(this, "s3_compat_storage_location", false);
  public get s3CompatStorageLocation() {
    return this._s3CompatStorageLocation;
  }

  // s3_storage_location - computed: true, optional: false, required: false
  private _s3StorageLocation = new ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList(this, "s3_storage_location", false);
  public get s3StorageLocation() {
    return this._s3StorageLocation;
  }

  // storage_allowed_locations - computed: true, optional: false, required: false
  public get storageAllowedLocations() {
    return this.getListAttribute('storage_allowed_locations');
  }

  // storage_base_url - computed: true, optional: false, required: false
  public get storageBaseUrl() {
    return this.getStringAttribute('storage_base_url');
  }

  // storage_provider - computed: true, optional: false, required: false
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }
}

export class ExternalVolumeDescribeOutputStorageLocationsList extends cdktn.ComplexList {

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
  public get(index: number): ExternalVolumeDescribeOutputStorageLocationsOutputReference {
    return new ExternalVolumeDescribeOutputStorageLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeDescribeOutput {
}

export function externalVolumeDescribeOutputToTerraform(struct?: ExternalVolumeDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeDescribeOutputToHclTerraform(struct?: ExternalVolumeDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalVolumeDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getStringAttribute('active');
  }

  // allow_writes - computed: true, optional: false, required: false
  public get allowWrites() {
    return this.getStringAttribute('allow_writes');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // storage_locations - computed: true, optional: false, required: false
  private _storageLocations = new ExternalVolumeDescribeOutputStorageLocationsList(this, "storage_locations", false);
  public get storageLocations() {
    return this._storageLocations;
  }
}

export class ExternalVolumeDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): ExternalVolumeDescribeOutputOutputReference {
    return new ExternalVolumeDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeShowOutput {
}

export function externalVolumeShowOutputToTerraform(struct?: ExternalVolumeShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeShowOutputToHclTerraform(struct?: ExternalVolumeShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalVolumeShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_writes - computed: true, optional: false, required: false
  public get allowWrites() {
    return this.getBooleanAttribute('allow_writes');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ExternalVolumeShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): ExternalVolumeShowOutputOutputReference {
    return new ExternalVolumeShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeStorageLocation {
  /**
  * Specifies the ID for your Office 365 tenant that the allowed and blocked storage accounts belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#azure_tenant_id ExternalVolume#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Specifies the ID for the KMS-managed key used to encrypt files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#encryption_kms_key_id ExternalVolume#encryption_kms_key_id}
  */
  readonly encryptionKmsKeyId?: string;
  /**
  * Specifies the encryption type used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#encryption_type ExternalVolume#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Specifies the access point ARN for the S3 bucket containing your data files. Only applicable for S3 and S3GOV storage providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_aws_access_point_arn ExternalVolume#storage_aws_access_point_arn}
  */
  readonly storageAwsAccessPointArn?: string;
  /**
  * External ID that Snowflake uses to establish a trust relationship with AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_aws_external_id ExternalVolume#storage_aws_external_id}
  */
  readonly storageAwsExternalId?: string;
  /**
  * Specifies the AWS key ID for the S3-compatible storage location. Only applicable for S3COMPAT storage provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_aws_key_id ExternalVolume#storage_aws_key_id}
  */
  readonly storageAwsKeyId?: string;
  /**
  * Specifies the case-sensitive Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_aws_role_arn ExternalVolume#storage_aws_role_arn}
  */
  readonly storageAwsRoleArn?: string;
  /**
  * Specifies the AWS secret key for the S3-compatible storage location. Only applicable for S3COMPAT storage provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_aws_secret_key ExternalVolume#storage_aws_secret_key}
  */
  readonly storageAwsSecretKey?: string;
  /**
  * Specifies the base URL for your cloud storage location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_base_url ExternalVolume#storage_base_url}
  */
  readonly storageBaseUrl: string;
  /**
  * Specifies the endpoint for the S3-compatible storage location. Only applicable for S3COMPAT storage provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_endpoint ExternalVolume#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * Name of the storage location. Must be unique for the external volume. Do not use the name `terraform_provider_sentinel_storage_location` - this is reserved for the provider for performing update operations. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_location_name ExternalVolume#storage_location_name}
  */
  readonly storageLocationName: string;
  /**
  * Specifies the cloud storage provider that stores your data files. Valid values are (case-insensitive): `GCS` | `AZURE` | `S3` | `S3GOV` | `S3COMPAT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#storage_provider ExternalVolume#storage_provider}
  */
  readonly storageProvider: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a privatelink endpoint for the storage location. Only applicable for S3, S3GOV, and AZURE storage providers. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#use_privatelink_endpoint ExternalVolume#use_privatelink_endpoint}
  */
  readonly usePrivatelinkEndpoint?: string;
}

export function externalVolumeStorageLocationToTerraform(struct?: ExternalVolumeStorageLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_tenant_id: cdktn.stringToTerraform(struct!.azureTenantId),
    encryption_kms_key_id: cdktn.stringToTerraform(struct!.encryptionKmsKeyId),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    storage_aws_access_point_arn: cdktn.stringToTerraform(struct!.storageAwsAccessPointArn),
    storage_aws_external_id: cdktn.stringToTerraform(struct!.storageAwsExternalId),
    storage_aws_key_id: cdktn.stringToTerraform(struct!.storageAwsKeyId),
    storage_aws_role_arn: cdktn.stringToTerraform(struct!.storageAwsRoleArn),
    storage_aws_secret_key: cdktn.stringToTerraform(struct!.storageAwsSecretKey),
    storage_base_url: cdktn.stringToTerraform(struct!.storageBaseUrl),
    storage_endpoint: cdktn.stringToTerraform(struct!.storageEndpoint),
    storage_location_name: cdktn.stringToTerraform(struct!.storageLocationName),
    storage_provider: cdktn.stringToTerraform(struct!.storageProvider),
    use_privatelink_endpoint: cdktn.stringToTerraform(struct!.usePrivatelinkEndpoint),
  }
}


export function externalVolumeStorageLocationToHclTerraform(struct?: ExternalVolumeStorageLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_aws_access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.storageAwsAccessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_aws_external_id: {
      value: cdktn.stringToHclTerraform(struct!.storageAwsExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_aws_key_id: {
      value: cdktn.stringToHclTerraform(struct!.storageAwsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_aws_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.storageAwsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_aws_secret_key: {
      value: cdktn.stringToHclTerraform(struct!.storageAwsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_base_url: {
      value: cdktn.stringToHclTerraform(struct!.storageBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.storageEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_location_name: {
      value: cdktn.stringToHclTerraform(struct!.storageLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_provider: {
      value: cdktn.stringToHclTerraform(struct!.storageProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_privatelink_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.usePrivatelinkEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeStorageLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ExternalVolumeStorageLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._encryptionKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKmsKeyId = this._encryptionKmsKeyId;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._storageAwsAccessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAwsAccessPointArn = this._storageAwsAccessPointArn;
    }
    if (this._storageAwsExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAwsExternalId = this._storageAwsExternalId;
    }
    if (this._storageAwsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAwsKeyId = this._storageAwsKeyId;
    }
    if (this._storageAwsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAwsRoleArn = this._storageAwsRoleArn;
    }
    if (this._storageAwsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAwsSecretKey = this._storageAwsSecretKey;
    }
    if (this._storageBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBaseUrl = this._storageBaseUrl;
    }
    if (this._storageEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageEndpoint = this._storageEndpoint;
    }
    if (this._storageLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocationName = this._storageLocationName;
    }
    if (this._storageProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProvider = this._storageProvider;
    }
    if (this._usePrivatelinkEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivatelinkEndpoint = this._usePrivatelinkEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeStorageLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureTenantId = undefined;
      this._encryptionKmsKeyId = undefined;
      this._encryptionType = undefined;
      this._storageAwsAccessPointArn = undefined;
      this._storageAwsExternalId = undefined;
      this._storageAwsKeyId = undefined;
      this._storageAwsRoleArn = undefined;
      this._storageAwsSecretKey = undefined;
      this._storageBaseUrl = undefined;
      this._storageEndpoint = undefined;
      this._storageLocationName = undefined;
      this._storageProvider = undefined;
      this._usePrivatelinkEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureTenantId = value.azureTenantId;
      this._encryptionKmsKeyId = value.encryptionKmsKeyId;
      this._encryptionType = value.encryptionType;
      this._storageAwsAccessPointArn = value.storageAwsAccessPointArn;
      this._storageAwsExternalId = value.storageAwsExternalId;
      this._storageAwsKeyId = value.storageAwsKeyId;
      this._storageAwsRoleArn = value.storageAwsRoleArn;
      this._storageAwsSecretKey = value.storageAwsSecretKey;
      this._storageBaseUrl = value.storageBaseUrl;
      this._storageEndpoint = value.storageEndpoint;
      this._storageLocationName = value.storageLocationName;
      this._storageProvider = value.storageProvider;
      this._usePrivatelinkEndpoint = value.usePrivatelinkEndpoint;
    }
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // encryption_kms_key_id - computed: false, optional: true, required: false
  private _encryptionKmsKeyId?: string; 
  public get encryptionKmsKeyId() {
    return this.getStringAttribute('encryption_kms_key_id');
  }
  public set encryptionKmsKeyId(value: string) {
    this._encryptionKmsKeyId = value;
  }
  public resetEncryptionKmsKeyId() {
    this._encryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKmsKeyIdInput() {
    return this._encryptionKmsKeyId;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // storage_aws_access_point_arn - computed: false, optional: true, required: false
  private _storageAwsAccessPointArn?: string; 
  public get storageAwsAccessPointArn() {
    return this.getStringAttribute('storage_aws_access_point_arn');
  }
  public set storageAwsAccessPointArn(value: string) {
    this._storageAwsAccessPointArn = value;
  }
  public resetStorageAwsAccessPointArn() {
    this._storageAwsAccessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsAccessPointArnInput() {
    return this._storageAwsAccessPointArn;
  }

  // storage_aws_external_id - computed: false, optional: true, required: false
  private _storageAwsExternalId?: string; 
  public get storageAwsExternalId() {
    return this.getStringAttribute('storage_aws_external_id');
  }
  public set storageAwsExternalId(value: string) {
    this._storageAwsExternalId = value;
  }
  public resetStorageAwsExternalId() {
    this._storageAwsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsExternalIdInput() {
    return this._storageAwsExternalId;
  }

  // storage_aws_key_id - computed: false, optional: true, required: false
  private _storageAwsKeyId?: string; 
  public get storageAwsKeyId() {
    return this.getStringAttribute('storage_aws_key_id');
  }
  public set storageAwsKeyId(value: string) {
    this._storageAwsKeyId = value;
  }
  public resetStorageAwsKeyId() {
    this._storageAwsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsKeyIdInput() {
    return this._storageAwsKeyId;
  }

  // storage_aws_role_arn - computed: false, optional: true, required: false
  private _storageAwsRoleArn?: string; 
  public get storageAwsRoleArn() {
    return this.getStringAttribute('storage_aws_role_arn');
  }
  public set storageAwsRoleArn(value: string) {
    this._storageAwsRoleArn = value;
  }
  public resetStorageAwsRoleArn() {
    this._storageAwsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsRoleArnInput() {
    return this._storageAwsRoleArn;
  }

  // storage_aws_secret_key - computed: false, optional: true, required: false
  private _storageAwsSecretKey?: string; 
  public get storageAwsSecretKey() {
    return this.getStringAttribute('storage_aws_secret_key');
  }
  public set storageAwsSecretKey(value: string) {
    this._storageAwsSecretKey = value;
  }
  public resetStorageAwsSecretKey() {
    this._storageAwsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsSecretKeyInput() {
    return this._storageAwsSecretKey;
  }

  // storage_base_url - computed: false, optional: false, required: true
  private _storageBaseUrl?: string; 
  public get storageBaseUrl() {
    return this.getStringAttribute('storage_base_url');
  }
  public set storageBaseUrl(value: string) {
    this._storageBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBaseUrlInput() {
    return this._storageBaseUrl;
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string; 
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint;
  }

  // storage_location_name - computed: false, optional: false, required: true
  private _storageLocationName?: string; 
  public get storageLocationName() {
    return this.getStringAttribute('storage_location_name');
  }
  public set storageLocationName(value: string) {
    this._storageLocationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationNameInput() {
    return this._storageLocationName;
  }

  // storage_provider - computed: false, optional: false, required: true
  private _storageProvider?: string; 
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }
  public set storageProvider(value: string) {
    this._storageProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProviderInput() {
    return this._storageProvider;
  }

  // use_privatelink_endpoint - computed: false, optional: true, required: false
  private _usePrivatelinkEndpoint?: string; 
  public get usePrivatelinkEndpoint() {
    return this.getStringAttribute('use_privatelink_endpoint');
  }
  public set usePrivatelinkEndpoint(value: string) {
    this._usePrivatelinkEndpoint = value;
  }
  public resetUsePrivatelinkEndpoint() {
    this._usePrivatelinkEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivatelinkEndpointInput() {
    return this._usePrivatelinkEndpoint;
  }
}

export class ExternalVolumeStorageLocationList extends cdktn.ComplexList {
  public internalValue? : ExternalVolumeStorageLocation[] | cdktn.IResolvable

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
  public get(index: number): ExternalVolumeStorageLocationOutputReference {
    return new ExternalVolumeStorageLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#create ExternalVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#delete ExternalVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#read ExternalVolume#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#update ExternalVolume#update}
  */
  readonly update?: string;
}

export function externalVolumeTimeoutsToTerraform(struct?: ExternalVolumeTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function externalVolumeTimeoutsToHclTerraform(struct?: ExternalVolumeTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalVolumeTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume snowflake_external_volume}
*/
export class ExternalVolume extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_external_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ExternalVolume resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalVolume to import
  * @param importFromId The id of the existing ExternalVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_external_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/external_volume snowflake_external_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_external_volume',
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
    this._allowWrites = config.allowWrites;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._storageLocation.internalValue = config.storageLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_writes - computed: false, optional: true, required: false
  private _allowWrites?: string; 
  public get allowWrites() {
    return this.getStringAttribute('allow_writes');
  }
  public set allowWrites(value: string) {
    this._allowWrites = value;
  }
  public resetAllowWrites() {
    this._allowWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWritesInput() {
    return this._allowWrites;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new ExternalVolumeDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ExternalVolumeShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation = new ExternalVolumeStorageLocationList(this, "storage_location", false);
  public get storageLocation() {
    return this._storageLocation;
  }
  public putStorageLocation(value: ExternalVolumeStorageLocation[] | cdktn.IResolvable) {
    this._storageLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExternalVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExternalVolumeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_writes: cdktn.stringToTerraform(this._allowWrites),
      comment: cdktn.stringToTerraform(this._comment),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      storage_location: cdktn.listMapper(externalVolumeStorageLocationToTerraform, true)(this._storageLocation.internalValue),
      timeouts: externalVolumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_writes: {
        value: cdktn.stringToHclTerraform(this._allowWrites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_location: {
        value: cdktn.listMapperHcl(externalVolumeStorageLocationToHclTerraform, true)(this._storageLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalVolumeStorageLocationList",
      },
      timeouts: {
        value: externalVolumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalVolumeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
