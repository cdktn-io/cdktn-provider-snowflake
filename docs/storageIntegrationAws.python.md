# `storageIntegrationAws` Submodule <a name="`storageIntegrationAws` Submodule" id="@cdktn/provider-snowflake.storageIntegrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageIntegrationAws <a name="StorageIntegrationAws" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws snowflake_storage_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAws(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  storage_allowed_locations: typing.List[str],
  storage_aws_role_arn: str,
  storage_provider: str,
  comment: str = None,
  id: str = None,
  storage_aws_external_id: str = None,
  storage_aws_object_acl: str = None,
  storage_blocked_locations: typing.List[str] = None,
  timeouts: StorageIntegrationAwsTimeouts = None,
  use_privatelink_endpoint: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this storage integration is available for usage in stages. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.name">name</a></code> | <code>str</code> | String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageAwsRoleArn">storage_aws_role_arn</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageProvider">storage_provider</a></code> | <code>str</code> | Specifies the storage provider for the integration. Valid options are: `S3` \| `S3GOV` \| `S3CHINA` \| `GCS` \| `AZURE`. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the storage integration. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#id StorageIntegrationAws#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageAwsExternalId">storage_aws_external_id</a></code> | <code>str</code> | Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageAwsObjectAcl">storage_aws_object_acl</a></code> | <code>str</code> | Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this storage integration is available for usage in stages.

`TRUE` allows users to create new stages that reference this integration. Existing stages that reference this integration function normally. `FALSE` prevents users from creating new stages that reference this integration. Existing stages that reference this integration cannot access the storage location in the stage definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#enabled StorageIntegrationAws#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.name"></a>

- *Type:* str

String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#name StorageIntegrationAws#name}

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageAllowedLocations"></a>

- *Type:* typing.List[str]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_allowed_locations StorageIntegrationAws#storage_allowed_locations}

---

##### `storage_aws_role_arn`<sup>Required</sup> <a name="storage_aws_role_arn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageAwsRoleArn"></a>

- *Type:* str

Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_aws_role_arn StorageIntegrationAws#storage_aws_role_arn}

---

##### `storage_provider`<sup>Required</sup> <a name="storage_provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageProvider"></a>

- *Type:* str

Specifies the storage provider for the integration. Valid options are: `S3` | `S3GOV` | `S3CHINA` | `GCS` | `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_provider StorageIntegrationAws#storage_provider}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the storage integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#comment StorageIntegrationAws#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#id StorageIntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_aws_external_id`<sup>Optional</sup> <a name="storage_aws_external_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageAwsExternalId"></a>

- *Type:* str

Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_aws_external_id StorageIntegrationAws#storage_aws_external_id}

---

##### `storage_aws_object_acl`<sup>Optional</sup> <a name="storage_aws_object_acl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageAwsObjectAcl"></a>

- *Type:* str

Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.

`bucket-owner-full-control` is the only currently supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_aws_object_acl StorageIntegrationAws#storage_aws_object_acl}

---

##### `storage_blocked_locations`<sup>Optional</sup> <a name="storage_blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.storageBlockedLocations"></a>

- *Type:* typing.List[str]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_blocked_locations StorageIntegrationAws#storage_blocked_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#timeouts StorageIntegrationAws#timeouts}

---

##### `use_privatelink_endpoint`<sup>Optional</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.usePrivatelinkEndpoint"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#use_privatelink_endpoint StorageIntegrationAws#use_privatelink_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageAwsExternalId">reset_storage_aws_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageAwsObjectAcl">reset_storage_aws_object_acl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageBlockedLocations">reset_storage_blocked_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetUsePrivatelinkEndpoint">reset_use_privatelink_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#create StorageIntegrationAws#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#delete StorageIntegrationAws#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#read StorageIntegrationAws#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#update StorageIntegrationAws#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_aws_external_id` <a name="reset_storage_aws_external_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageAwsExternalId"></a>

```python
def reset_storage_aws_external_id() -> None
```

##### `reset_storage_aws_object_acl` <a name="reset_storage_aws_object_acl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageAwsObjectAcl"></a>

```python
def reset_storage_aws_object_acl() -> None
```

##### `reset_storage_blocked_locations` <a name="reset_storage_blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageBlockedLocations"></a>

```python
def reset_storage_blocked_locations() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_privatelink_endpoint` <a name="reset_use_privatelink_endpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetUsePrivatelinkEndpoint"></a>

```python
def reset_use_privatelink_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageIntegrationAws resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isConstruct"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAws.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAws.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAws.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAws.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageIntegrationAws resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageIntegrationAws to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageIntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageIntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList">StorageIntegrationAwsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList">StorageIntegrationAwsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference">StorageIntegrationAwsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAllowedLocationsInput">storage_allowed_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsExternalIdInput">storage_aws_external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsObjectAclInput">storage_aws_object_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsRoleArnInput">storage_aws_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageBlockedLocationsInput">storage_blocked_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageProviderInput">storage_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.usePrivatelinkEndpointInput">use_privatelink_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsExternalId">storage_aws_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsObjectAcl">storage_aws_object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsRoleArn">storage_aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageProvider">storage_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.describeOutput"></a>

```python
describe_output: StorageIntegrationAwsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList">StorageIntegrationAwsDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.showOutput"></a>

```python
show_output: StorageIntegrationAwsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList">StorageIntegrationAwsShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.timeouts"></a>

```python
timeouts: StorageIntegrationAwsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference">StorageIntegrationAwsTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_allowed_locations_input`<sup>Optional</sup> <a name="storage_allowed_locations_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAllowedLocationsInput"></a>

```python
storage_allowed_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_aws_external_id_input`<sup>Optional</sup> <a name="storage_aws_external_id_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsExternalIdInput"></a>

```python
storage_aws_external_id_input: str
```

- *Type:* str

---

##### `storage_aws_object_acl_input`<sup>Optional</sup> <a name="storage_aws_object_acl_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsObjectAclInput"></a>

```python
storage_aws_object_acl_input: str
```

- *Type:* str

---

##### `storage_aws_role_arn_input`<sup>Optional</sup> <a name="storage_aws_role_arn_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsRoleArnInput"></a>

```python
storage_aws_role_arn_input: str
```

- *Type:* str

---

##### `storage_blocked_locations_input`<sup>Optional</sup> <a name="storage_blocked_locations_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageBlockedLocationsInput"></a>

```python
storage_blocked_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_provider_input`<sup>Optional</sup> <a name="storage_provider_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageProviderInput"></a>

```python
storage_provider_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageIntegrationAwsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a>

---

##### `use_privatelink_endpoint_input`<sup>Optional</sup> <a name="use_privatelink_endpoint_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.usePrivatelinkEndpointInput"></a>

```python
use_privatelink_endpoint_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAllowedLocations"></a>

```python
storage_allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_aws_external_id`<sup>Required</sup> <a name="storage_aws_external_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsExternalId"></a>

```python
storage_aws_external_id: str
```

- *Type:* str

---

##### `storage_aws_object_acl`<sup>Required</sup> <a name="storage_aws_object_acl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsObjectAcl"></a>

```python
storage_aws_object_acl: str
```

- *Type:* str

---

##### `storage_aws_role_arn`<sup>Required</sup> <a name="storage_aws_role_arn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsRoleArn"></a>

```python
storage_aws_role_arn: str
```

- *Type:* str

---

##### `storage_blocked_locations`<sup>Required</sup> <a name="storage_blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageBlockedLocations"></a>

```python
storage_blocked_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_provider`<sup>Required</sup> <a name="storage_provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageProvider"></a>

```python
storage_provider: str
```

- *Type:* str

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageIntegrationAwsConfig <a name="StorageIntegrationAwsConfig" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  storage_allowed_locations: typing.List[str],
  storage_aws_role_arn: str,
  storage_provider: str,
  comment: str = None,
  id: str = None,
  storage_aws_external_id: str = None,
  storage_aws_object_acl: str = None,
  storage_blocked_locations: typing.List[str] = None,
  timeouts: StorageIntegrationAwsTimeouts = None,
  use_privatelink_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this storage integration is available for usage in stages. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.name">name</a></code> | <code>str</code> | String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsRoleArn">storage_aws_role_arn</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageProvider">storage_provider</a></code> | <code>str</code> | Specifies the storage provider for the integration. Valid options are: `S3` \| `S3GOV` \| `S3CHINA` \| `GCS` \| `AZURE`. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the storage integration. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#id StorageIntegrationAws#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsExternalId">storage_aws_external_id</a></code> | <code>str</code> | Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsObjectAcl">storage_aws_object_acl</a></code> | <code>str</code> | Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageBlockedLocations">storage_blocked_locations</a></code> | <code>typing.List[str]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this storage integration is available for usage in stages.

`TRUE` allows users to create new stages that reference this integration. Existing stages that reference this integration function normally. `FALSE` prevents users from creating new stages that reference this integration. Existing stages that reference this integration cannot access the storage location in the stage definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#enabled StorageIntegrationAws#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#name StorageIntegrationAws#name}

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAllowedLocations"></a>

```python
storage_allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_allowed_locations StorageIntegrationAws#storage_allowed_locations}

---

##### `storage_aws_role_arn`<sup>Required</sup> <a name="storage_aws_role_arn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsRoleArn"></a>

```python
storage_aws_role_arn: str
```

- *Type:* str

Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_aws_role_arn StorageIntegrationAws#storage_aws_role_arn}

---

##### `storage_provider`<sup>Required</sup> <a name="storage_provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageProvider"></a>

```python
storage_provider: str
```

- *Type:* str

Specifies the storage provider for the integration. Valid options are: `S3` | `S3GOV` | `S3CHINA` | `GCS` | `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_provider StorageIntegrationAws#storage_provider}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the storage integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#comment StorageIntegrationAws#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#id StorageIntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_aws_external_id`<sup>Optional</sup> <a name="storage_aws_external_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsExternalId"></a>

```python
storage_aws_external_id: str
```

- *Type:* str

Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_aws_external_id StorageIntegrationAws#storage_aws_external_id}

---

##### `storage_aws_object_acl`<sup>Optional</sup> <a name="storage_aws_object_acl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsObjectAcl"></a>

```python
storage_aws_object_acl: str
```

- *Type:* str

Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.

`bucket-owner-full-control` is the only currently supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_aws_object_acl StorageIntegrationAws#storage_aws_object_acl}

---

##### `storage_blocked_locations`<sup>Optional</sup> <a name="storage_blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageBlockedLocations"></a>

```python
storage_blocked_locations: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#storage_blocked_locations StorageIntegrationAws#storage_blocked_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.timeouts"></a>

```python
timeouts: StorageIntegrationAwsTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#timeouts StorageIntegrationAws#timeouts}

---

##### `use_privatelink_endpoint`<sup>Optional</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#use_privatelink_endpoint StorageIntegrationAws#use_privatelink_endpoint}

---

### StorageIntegrationAwsDescribeOutput <a name="StorageIntegrationAwsDescribeOutput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsDescribeOutput()
```


### StorageIntegrationAwsShowOutput <a name="StorageIntegrationAwsShowOutput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsShowOutput()
```


### StorageIntegrationAwsTimeouts <a name="StorageIntegrationAwsTimeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#create StorageIntegrationAws#create}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#delete StorageIntegrationAws#delete}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#read StorageIntegrationAws#read}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#update StorageIntegrationAws#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#create StorageIntegrationAws#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#delete StorageIntegrationAws#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#read StorageIntegrationAws#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/storage_integration_aws#update StorageIntegrationAws#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageIntegrationAwsDescribeOutputList <a name="StorageIntegrationAwsDescribeOutputList" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationAwsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationAwsDescribeOutputOutputReference <a name="StorageIntegrationAwsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.allowedLocations">allowed_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.blockedLocations">blocked_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.iamUserArn">iam_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.objectAcl">object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutput">StorageIntegrationAwsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_locations`<sup>Required</sup> <a name="allowed_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.allowedLocations"></a>

```python
allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_locations`<sup>Required</sup> <a name="blocked_locations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.blockedLocations"></a>

```python
blocked_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `iam_user_arn`<sup>Required</sup> <a name="iam_user_arn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.iamUserArn"></a>

```python
iam_user_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object_acl`<sup>Required</sup> <a name="object_acl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.objectAcl"></a>

```python
object_acl: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationAwsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutput">StorageIntegrationAwsDescribeOutput</a>

---


### StorageIntegrationAwsShowOutputList <a name="StorageIntegrationAwsShowOutputList" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageIntegrationAwsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageIntegrationAwsShowOutputOutputReference <a name="StorageIntegrationAwsShowOutputOutputReference" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutput">StorageIntegrationAwsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: StorageIntegrationAwsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutput">StorageIntegrationAwsShowOutput</a>

---


### StorageIntegrationAwsTimeoutsOutputReference <a name="StorageIntegrationAwsTimeoutsOutputReference" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_integration_aws

storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageIntegrationAwsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a>

---



