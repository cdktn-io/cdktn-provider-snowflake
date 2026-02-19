# `stageExternalAzure` Submodule <a name="`stageExternalAzure` Submodule" id="@cdktn/provider-snowflake.stageExternalAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageExternalAzure <a name="StageExternalAzure" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure snowflake_stage_external_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzure(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  url: str,
  comment: str = None,
  credentials: StageExternalAzureCredentials = None,
  directory: StageExternalAzureDirectory = None,
  encryption: StageExternalAzureEncryption = None,
  file_format: StageExternalAzureFileFormat = None,
  id: str = None,
  storage_integration: str = None,
  timeouts: StageExternalAzureTimeouts = None,
  use_privatelink_endpoint: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.url">url</a></code> | <code>str</code> | Specifies the URL for the Azure storage container (e.g., 'azure://account.blob.core.windows.net/container'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a></code> | credentials block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#id StageExternalAzure#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.storageIntegration">storage_integration</a></code> | <code>str</code> | Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a private link endpoint for Azure storage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#database StageExternalAzure#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#name StageExternalAzure#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#schema StageExternalAzure#schema}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.url"></a>

- *Type:* str

Specifies the URL for the Azure storage container (e.g., 'azure://account.blob.core.windows.net/container').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#url StageExternalAzure#url}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#comment StageExternalAzure#comment}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.credentials"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#credentials StageExternalAzure#credentials}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.directory"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#directory StageExternalAzure#directory}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#encryption StageExternalAzure#encryption}

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.fileFormat"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#file_format StageExternalAzure#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#id StageExternalAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_integration`<sup>Optional</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.storageIntegration"></a>

- *Type:* str

Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#storage_integration StageExternalAzure#storage_integration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#timeouts StageExternalAzure#timeouts}

---

##### `use_privatelink_endpoint`<sup>Optional</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.usePrivatelinkEndpoint"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a private link endpoint for Azure storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#use_privatelink_endpoint StageExternalAzure#use_privatelink_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory">put_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat">put_file_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetFileFormat">reset_file_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetStorageIntegration">reset_storage_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetUsePrivatelinkEndpoint">reset_use_privatelink_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credentials` <a name="put_credentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putCredentials"></a>

```python
def put_credentials(
  azure_sas_token: str
) -> None
```

###### `azure_sas_token`<sup>Required</sup> <a name="azure_sas_token" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putCredentials.parameter.azureSasToken"></a>

- *Type:* str

Specifies the shared access signature (SAS) token for Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#azure_sas_token StageExternalAzure#azure_sas_token}

---

##### `put_directory` <a name="put_directory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory"></a>

```python
def put_directory(
  enable: bool | IResolvable,
  auto_refresh: str = None,
  notification_integration: str = None,
  refresh_on_create: str = None
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#enable StageExternalAzure#enable}

---

###### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory.parameter.autoRefresh"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#auto_refresh StageExternalAzure#auto_refresh}

---

###### `notification_integration`<sup>Optional</sup> <a name="notification_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory.parameter.notificationIntegration"></a>

- *Type:* str

Specifies the name of the notification integration used to automatically refresh the directory table metadata.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#notification_integration StageExternalAzure#notification_integration}

---

###### `refresh_on_create`<sup>Optional</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory.parameter.refreshOnCreate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#refresh_on_create StageExternalAzure#refresh_on_create}

---

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putEncryption"></a>

```python
def put_encryption(
  azure_cse: StageExternalAzureEncryptionAzureCse = None,
  none: StageExternalAzureEncryptionNone = None
) -> None
```

###### `azure_cse`<sup>Optional</sup> <a name="azure_cse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putEncryption.parameter.azureCse"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a>

azure_cse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#azure_cse StageExternalAzure#azure_cse}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putEncryption.parameter.none"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#none StageExternalAzure#none}

---

##### `put_file_format` <a name="put_file_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat"></a>

```python
def put_file_format(
  avro: StageExternalAzureFileFormatAvro = None,
  csv: StageExternalAzureFileFormatCsv = None,
  format_name: str = None,
  json: StageExternalAzureFileFormatJson = None,
  orc: StageExternalAzureFileFormatOrc = None,
  parquet: StageExternalAzureFileFormatParquet = None,
  xml: StageExternalAzureFileFormatXml = None
) -> None
```

###### `avro`<sup>Optional</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat.parameter.avro"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#avro StageExternalAzure#avro}

---

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat.parameter.csv"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#csv StageExternalAzure#csv}

---

###### `format_name`<sup>Optional</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat.parameter.formatName"></a>

- *Type:* str

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#format_name StageExternalAzure#format_name}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat.parameter.json"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#json StageExternalAzure#json}

---

###### `orc`<sup>Optional</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat.parameter.orc"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#orc StageExternalAzure#orc}

---

###### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat.parameter.parquet"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#parquet StageExternalAzure#parquet}

---

###### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat.parameter.xml"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#xml StageExternalAzure#xml}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#create StageExternalAzure#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#delete StageExternalAzure#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#read StageExternalAzure#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#update StageExternalAzure#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_directory` <a name="reset_directory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_file_format` <a name="reset_file_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetFileFormat"></a>

```python
def reset_file_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_integration` <a name="reset_storage_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetStorageIntegration"></a>

```python
def reset_storage_integration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_privatelink_endpoint` <a name="reset_use_privatelink_endpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetUsePrivatelinkEndpoint"></a>

```python
def reset_use_privatelink_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StageExternalAzure resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isConstruct"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StageExternalAzure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StageExternalAzure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StageExternalAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StageExternalAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference">StageExternalAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList">StageExternalAzureDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference">StageExternalAzureDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference">StageExternalAzureEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference">StageExternalAzureFileFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList">StageExternalAzureShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.stageType">stage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference">StageExternalAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.credentialsInput">credentials_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.directoryInput">directory_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.encryptionInput">encryption_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fileFormatInput">file_format_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.storageIntegrationInput">storage_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.usePrivatelinkEndpointInput">use_privatelink_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.storageIntegration">storage_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.credentials"></a>

```python
credentials: StageExternalAzureCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference">StageExternalAzureCredentialsOutputReference</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.describeOutput"></a>

```python
describe_output: StageExternalAzureDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList">StageExternalAzureDescribeOutputList</a>

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.directory"></a>

```python
directory: StageExternalAzureDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference">StageExternalAzureDirectoryOutputReference</a>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.encryption"></a>

```python
encryption: StageExternalAzureEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference">StageExternalAzureEncryptionOutputReference</a>

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fileFormat"></a>

```python
file_format: StageExternalAzureFileFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference">StageExternalAzureFileFormatOutputReference</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.showOutput"></a>

```python
show_output: StageExternalAzureShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList">StageExternalAzureShowOutputList</a>

---

##### `stage_type`<sup>Required</sup> <a name="stage_type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.stageType"></a>

```python
stage_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.timeouts"></a>

```python
timeouts: StageExternalAzureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference">StageExternalAzureTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.credentialsInput"></a>

```python
credentials_input: StageExternalAzureCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.directoryInput"></a>

```python
directory_input: StageExternalAzureDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.encryptionInput"></a>

```python
encryption_input: StageExternalAzureEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a>

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fileFormatInput"></a>

```python
file_format_input: StageExternalAzureFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `storage_integration_input`<sup>Optional</sup> <a name="storage_integration_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.storageIntegrationInput"></a>

```python
storage_integration_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StageExternalAzureTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `use_privatelink_endpoint_input`<sup>Optional</sup> <a name="use_privatelink_endpoint_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.usePrivatelinkEndpointInput"></a>

```python
use_privatelink_endpoint_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StageExternalAzureConfig <a name="StageExternalAzureConfig" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  url: str,
  comment: str = None,
  credentials: StageExternalAzureCredentials = None,
  directory: StageExternalAzureDirectory = None,
  encryption: StageExternalAzureEncryption = None,
  file_format: StageExternalAzureFileFormat = None,
  id: str = None,
  storage_integration: str = None,
  timeouts: StageExternalAzureTimeouts = None,
  use_privatelink_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.url">url</a></code> | <code>str</code> | Specifies the URL for the Azure storage container (e.g., 'azure://account.blob.core.windows.net/container'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a></code> | credentials block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#id StageExternalAzure#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.storageIntegration">storage_integration</a></code> | <code>str</code> | Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a private link endpoint for Azure storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#database StageExternalAzure#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#name StageExternalAzure#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#schema StageExternalAzure#schema}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Specifies the URL for the Azure storage container (e.g., 'azure://account.blob.core.windows.net/container').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#url StageExternalAzure#url}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#comment StageExternalAzure#comment}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.credentials"></a>

```python
credentials: StageExternalAzureCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#credentials StageExternalAzure#credentials}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.directory"></a>

```python
directory: StageExternalAzureDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#directory StageExternalAzure#directory}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.encryption"></a>

```python
encryption: StageExternalAzureEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#encryption StageExternalAzure#encryption}

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.fileFormat"></a>

```python
file_format: StageExternalAzureFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#file_format StageExternalAzure#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#id StageExternalAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_integration`<sup>Optional</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#storage_integration StageExternalAzure#storage_integration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.timeouts"></a>

```python
timeouts: StageExternalAzureTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#timeouts StageExternalAzure#timeouts}

---

##### `use_privatelink_endpoint`<sup>Optional</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a private link endpoint for Azure storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#use_privatelink_endpoint StageExternalAzure#use_privatelink_endpoint}

---

### StageExternalAzureCredentials <a name="StageExternalAzureCredentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureCredentials(
  azure_sas_token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials.property.azureSasToken">azure_sas_token</a></code> | <code>str</code> | Specifies the shared access signature (SAS) token for Azure. |

---

##### `azure_sas_token`<sup>Required</sup> <a name="azure_sas_token" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials.property.azureSasToken"></a>

```python
azure_sas_token: str
```

- *Type:* str

Specifies the shared access signature (SAS) token for Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#azure_sas_token StageExternalAzure#azure_sas_token}

---

### StageExternalAzureDescribeOutput <a name="StageExternalAzureDescribeOutput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutput()
```


### StageExternalAzureDescribeOutputDirectoryTable <a name="StageExternalAzureDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable()
```


### StageExternalAzureDescribeOutputFileFormat <a name="StageExternalAzureDescribeOutputFileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormat.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormat()
```


### StageExternalAzureDescribeOutputFileFormatAvro <a name="StageExternalAzureDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro()
```


### StageExternalAzureDescribeOutputFileFormatCsv <a name="StageExternalAzureDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv()
```


### StageExternalAzureDescribeOutputFileFormatJson <a name="StageExternalAzureDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson()
```


### StageExternalAzureDescribeOutputFileFormatOrc <a name="StageExternalAzureDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc()
```


### StageExternalAzureDescribeOutputFileFormatParquet <a name="StageExternalAzureDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet()
```


### StageExternalAzureDescribeOutputFileFormatXml <a name="StageExternalAzureDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml()
```


### StageExternalAzureDirectory <a name="StageExternalAzureDirectory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDirectory(
  enable: bool | IResolvable,
  auto_refresh: str = None,
  notification_integration: str = None,
  refresh_on_create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable a directory table on the external stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.notificationIntegration">notification_integration</a></code> | <code>str</code> | Specifies the name of the notification integration used to automatically refresh the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.refreshOnCreate">refresh_on_create</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#enable StageExternalAzure#enable}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#auto_refresh StageExternalAzure#auto_refresh}

---

##### `notification_integration`<sup>Optional</sup> <a name="notification_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.notificationIntegration"></a>

```python
notification_integration: str
```

- *Type:* str

Specifies the name of the notification integration used to automatically refresh the directory table metadata.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#notification_integration StageExternalAzure#notification_integration}

---

##### `refresh_on_create`<sup>Optional</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.refreshOnCreate"></a>

```python
refresh_on_create: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#refresh_on_create StageExternalAzure#refresh_on_create}

---

### StageExternalAzureEncryption <a name="StageExternalAzureEncryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureEncryption(
  azure_cse: StageExternalAzureEncryptionAzureCse = None,
  none: StageExternalAzureEncryptionNone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.property.azureCse">azure_cse</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a></code> | azure_cse block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.property.none">none</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a></code> | none block. |

---

##### `azure_cse`<sup>Optional</sup> <a name="azure_cse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.property.azureCse"></a>

```python
azure_cse: StageExternalAzureEncryptionAzureCse
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a>

azure_cse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#azure_cse StageExternalAzure#azure_cse}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.property.none"></a>

```python
none: StageExternalAzureEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#none StageExternalAzure#none}

---

### StageExternalAzureEncryptionAzureCse <a name="StageExternalAzureEncryptionAzureCse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureEncryptionAzureCse(
  master_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse.property.masterKey">master_key</a></code> | <code>str</code> | Specifies the 128-bit or 256-bit client-side master key. |

---

##### `master_key`<sup>Required</sup> <a name="master_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse.property.masterKey"></a>

```python
master_key: str
```

- *Type:* str

Specifies the 128-bit or 256-bit client-side master key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#master_key StageExternalAzure#master_key}

---

### StageExternalAzureEncryptionNone <a name="StageExternalAzureEncryptionNone" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureEncryptionNone()
```


### StageExternalAzureFileFormat <a name="StageExternalAzureFileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormat(
  avro: StageExternalAzureFileFormatAvro = None,
  csv: StageExternalAzureFileFormatCsv = None,
  format_name: str = None,
  json: StageExternalAzureFileFormatJson = None,
  orc: StageExternalAzureFileFormatOrc = None,
  parquet: StageExternalAzureFileFormatParquet = None,
  xml: StageExternalAzureFileFormatXml = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.formatName">format_name</a></code> | <code>str</code> | Fully qualified name of the file format (e.g., 'database.schema.format_name'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a></code> | json block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a></code> | orc block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a></code> | parquet block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a></code> | xml block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.avro"></a>

```python
avro: StageExternalAzureFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#avro StageExternalAzure#avro}

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.csv"></a>

```python
csv: StageExternalAzureFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#csv StageExternalAzure#csv}

---

##### `format_name`<sup>Optional</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#format_name StageExternalAzure#format_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.json"></a>

```python
json: StageExternalAzureFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#json StageExternalAzure#json}

---

##### `orc`<sup>Optional</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.orc"></a>

```python
orc: StageExternalAzureFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#orc StageExternalAzure#orc}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.parquet"></a>

```python
parquet: StageExternalAzureFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#parquet StageExternalAzure#parquet}

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.xml"></a>

```python
xml: StageExternalAzureFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#xml StageExternalAzure#xml}

---

### StageExternalAzureFileFormatAvro <a name="StageExternalAzureFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatAvro(
  compression: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. Valid values: `AUTO` \| `GZIP` \| `BROTLI` \| `ZSTD` \| `DEFLATE` \| `RAW_DEFLATE` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

### StageExternalAzureFileFormatCsv <a name="StageExternalAzureFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatCsv(
  binary_format: str = None,
  compression: str = None,
  date_format: str = None,
  empty_field_as_null: str = None,
  encoding: str = None,
  error_on_column_count_mismatch: str = None,
  escape: str = None,
  escape_unenclosed_field: str = None,
  field_delimiter: str = None,
  field_optionally_enclosed_by: str = None,
  file_extension: str = None,
  multi_line: str = None,
  null_if: typing.List[str] = None,
  parse_header: str = None,
  record_delimiter: str = None,
  replace_invalid_characters: str = None,
  skip_blank_lines: str = None,
  skip_byte_order_mark: str = None,
  skip_header: typing.Union[int, float] = None,
  time_format: str = None,
  timestamp_format: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.encoding">encoding</a></code> | <code>str</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.escape">escape</a></code> | <code>str</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.parseHeader">parse_header</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#binary_format StageExternalAzure#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#date_format StageExternalAzure#date_format}

---

##### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#empty_field_as_null StageExternalAzure#empty_field_as_null}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#encoding StageExternalAzure#encoding}

---

##### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#error_on_column_count_mismatch StageExternalAzure#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.escape"></a>

```python
escape: str
```

- *Type:* str

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#escape StageExternalAzure#escape}

---

##### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#escape_unenclosed_field StageExternalAzure#escape_unenclosed_field}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#field_delimiter StageExternalAzure#field_delimiter}

---

##### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#field_optionally_enclosed_by StageExternalAzure#field_optionally_enclosed_by}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#file_extension StageExternalAzure#file_extension}

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#multi_line StageExternalAzure#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.parseHeader"></a>

```python
parse_header: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#parse_header StageExternalAzure#parse_header}

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#record_delimiter StageExternalAzure#record_delimiter}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipBlankLines"></a>

```python
skip_blank_lines: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_blank_lines StageExternalAzure#skip_blank_lines}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

##### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_header StageExternalAzure#skip_header}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#time_format StageExternalAzure#time_format}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#timestamp_format StageExternalAzure#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

### StageExternalAzureFileFormatJson <a name="StageExternalAzureFileFormatJson" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatJson(
  allow_duplicate: str = None,
  binary_format: str = None,
  compression: str = None,
  date_format: str = None,
  enable_octal: str = None,
  file_extension: str = None,
  ignore_utf8_errors: str = None,
  multi_line: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  skip_byte_order_mark: str = None,
  strip_null_values: str = None,
  strip_outer_array: str = None,
  time_format: str = None,
  timestamp_format: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.enableOctal">enable_octal</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.stripNullValues">strip_null_values</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.allowDuplicate"></a>

```python
allow_duplicate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#allow_duplicate StageExternalAzure#allow_duplicate}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#binary_format StageExternalAzure#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#date_format StageExternalAzure#date_format}

---

##### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.enableOctal"></a>

```python
enable_octal: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#enable_octal StageExternalAzure#enable_octal}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#file_extension StageExternalAzure#file_extension}

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#ignore_utf8_errors StageExternalAzure#ignore_utf8_errors}

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#multi_line StageExternalAzure#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

##### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.stripNullValues"></a>

```python
strip_null_values: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#strip_null_values StageExternalAzure#strip_null_values}

---

##### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.stripOuterArray"></a>

```python
strip_outer_array: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#strip_outer_array StageExternalAzure#strip_outer_array}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#time_format StageExternalAzure#time_format}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#timestamp_format StageExternalAzure#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

### StageExternalAzureFileFormatOrc <a name="StageExternalAzureFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatOrc(
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

### StageExternalAzureFileFormatParquet <a name="StageExternalAzureFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatParquet(
  binary_as_text: str = None,
  compression: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None,
  use_logical_type: str = None,
  use_vectorized_scanner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.binaryAsText">binary_as_text</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. Valid values: `AUTO` \| `LZO` \| `SNAPPY` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.useLogicalType">use_logical_type</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. |

---

##### `binary_as_text`<sup>Optional</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.binaryAsText"></a>

```python
binary_as_text: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#binary_as_text StageExternalAzure#binary_as_text}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

##### `use_logical_type`<sup>Optional</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.useLogicalType"></a>

```python
use_logical_type: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#use_logical_type StageExternalAzure#use_logical_type}

---

##### `use_vectorized_scanner`<sup>Optional</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#use_vectorized_scanner StageExternalAzure#use_vectorized_scanner}

---

### StageExternalAzureFileFormatXml <a name="StageExternalAzureFileFormatXml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatXml(
  compression: str = None,
  disable_auto_convert: str = None,
  ignore_utf8_errors: str = None,
  preserve_space: str = None,
  replace_invalid_characters: str = None,
  skip_byte_order_mark: str = None,
  strip_outer_element: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.disableAutoConvert">disable_auto_convert</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.preserveSpace">preserve_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.stripOuterElement">strip_outer_element</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `disable_auto_convert`<sup>Optional</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.disableAutoConvert"></a>

```python
disable_auto_convert: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#disable_auto_convert StageExternalAzure#disable_auto_convert}

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#ignore_utf8_errors StageExternalAzure#ignore_utf8_errors}

---

##### `preserve_space`<sup>Optional</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.preserveSpace"></a>

```python
preserve_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#preserve_space StageExternalAzure#preserve_space}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

##### `strip_outer_element`<sup>Optional</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.stripOuterElement"></a>

```python
strip_outer_element: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#strip_outer_element StageExternalAzure#strip_outer_element}

---

### StageExternalAzureShowOutput <a name="StageExternalAzureShowOutput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureShowOutput()
```


### StageExternalAzureTimeouts <a name="StageExternalAzureTimeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#create StageExternalAzure#create}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#delete StageExternalAzure#delete}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#read StageExternalAzure#read}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#update StageExternalAzure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#create StageExternalAzure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#delete StageExternalAzure#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#read StageExternalAzure#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#update StageExternalAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StageExternalAzureCredentialsOutputReference <a name="StageExternalAzureCredentialsOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.azureSasTokenInput">azure_sas_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.azureSasToken">azure_sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_sas_token_input`<sup>Optional</sup> <a name="azure_sas_token_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.azureSasTokenInput"></a>

```python
azure_sas_token_input: str
```

- *Type:* str

---

##### `azure_sas_token`<sup>Required</sup> <a name="azure_sas_token" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.azureSasToken"></a>

```python
azure_sas_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a>

---


### StageExternalAzureDescribeOutputDirectoryTableList <a name="StageExternalAzureDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputDirectoryTableOutputReference <a name="StageExternalAzureDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.autoRefresh">auto_refresh</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable">StageExternalAzureDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```python
auto_refresh: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```python
enable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutputDirectoryTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable">StageExternalAzureDescribeOutputDirectoryTable</a>

---


### StageExternalAzureDescribeOutputFileFormatAvroList <a name="StageExternalAzureDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputFileFormatAvroOutputReference <a name="StageExternalAzureDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro">StageExternalAzureDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutputFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro">StageExternalAzureDescribeOutputFileFormatAvro</a>

---


### StageExternalAzureDescribeOutputFileFormatCsvList <a name="StageExternalAzureDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputFileFormatCsvOutputReference <a name="StageExternalAzureDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.parseHeader">parse_header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">skip_blank_lines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">validate_utf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv">StageExternalAzureDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```python
parse_header: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```python
skip_blank_lines: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate_utf8`<sup>Required</sup> <a name="validate_utf8" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```python
validate_utf8: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutputFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv">StageExternalAzureDescribeOutputFileFormatCsv</a>

---


### StageExternalAzureDescribeOutputFileFormatJsonList <a name="StageExternalAzureDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputFileFormatJsonOutputReference <a name="StageExternalAzureDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">allow_duplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.enableOctal">enable_octal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">strip_null_values</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">strip_outer_array</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson">StageExternalAzureDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```python
allow_duplicate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```python
enable_octal: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```python
strip_null_values: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```python
strip_outer_array: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutputFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson">StageExternalAzureDescribeOutputFileFormatJson</a>

---


### StageExternalAzureDescribeOutputFileFormatList <a name="StageExternalAzureDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputFileFormatOrcList <a name="StageExternalAzureDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputFileFormatOrcOutputReference <a name="StageExternalAzureDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc">StageExternalAzureDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutputFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc">StageExternalAzureDescribeOutputFileFormatOrc</a>

---


### StageExternalAzureDescribeOutputFileFormatOutputReference <a name="StageExternalAzureDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList">StageExternalAzureDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList">StageExternalAzureDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.formatName">format_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList">StageExternalAzureDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList">StageExternalAzureDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList">StageExternalAzureDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList">StageExternalAzureDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormat">StageExternalAzureDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.avro"></a>

```python
avro: StageExternalAzureDescribeOutputFileFormatAvroList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList">StageExternalAzureDescribeOutputFileFormatAvroList</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.csv"></a>

```python
csv: StageExternalAzureDescribeOutputFileFormatCsvList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList">StageExternalAzureDescribeOutputFileFormatCsvList</a>

---

##### `format_name`<sup>Required</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.json"></a>

```python
json: StageExternalAzureDescribeOutputFileFormatJsonList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList">StageExternalAzureDescribeOutputFileFormatJsonList</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.orc"></a>

```python
orc: StageExternalAzureDescribeOutputFileFormatOrcList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList">StageExternalAzureDescribeOutputFileFormatOrcList</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.parquet"></a>

```python
parquet: StageExternalAzureDescribeOutputFileFormatParquetList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList">StageExternalAzureDescribeOutputFileFormatParquetList</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.xml"></a>

```python
xml: StageExternalAzureDescribeOutputFileFormatXmlList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList">StageExternalAzureDescribeOutputFileFormatXmlList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutputFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormat">StageExternalAzureDescribeOutputFileFormat</a>

---


### StageExternalAzureDescribeOutputFileFormatParquetList <a name="StageExternalAzureDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputFileFormatParquetOutputReference <a name="StageExternalAzureDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">binary_as_text</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">use_logical_type</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet">StageExternalAzureDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_as_text`<sup>Required</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```python
binary_as_text: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_logical_type`<sup>Required</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```python
use_logical_type: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_vectorized_scanner`<sup>Required</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutputFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet">StageExternalAzureDescribeOutputFileFormatParquet</a>

---


### StageExternalAzureDescribeOutputFileFormatXmlList <a name="StageExternalAzureDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputFileFormatXmlOutputReference <a name="StageExternalAzureDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">disable_auto_convert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">preserve_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">strip_outer_element</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml">StageExternalAzureDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `disable_auto_convert`<sup>Required</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```python
disable_auto_convert: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preserve_space`<sup>Required</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```python
preserve_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_element`<sup>Required</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```python
strip_outer_element: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutputFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml">StageExternalAzureDescribeOutputFileFormatXml</a>

---


### StageExternalAzureDescribeOutputList <a name="StageExternalAzureDescribeOutputList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureDescribeOutputOutputReference <a name="StageExternalAzureDescribeOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.directoryTable">directory_table</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList">StageExternalAzureDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList">StageExternalAzureDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutput">StageExternalAzureDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_table`<sup>Required</sup> <a name="directory_table" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.directoryTable"></a>

```python
directory_table: StageExternalAzureDescribeOutputDirectoryTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList">StageExternalAzureDescribeOutputDirectoryTableList</a>

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.fileFormat"></a>

```python
file_format: StageExternalAzureDescribeOutputFileFormatList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList">StageExternalAzureDescribeOutputFileFormatList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutput">StageExternalAzureDescribeOutput</a>

---


### StageExternalAzureDirectoryOutputReference <a name="StageExternalAzureDirectoryOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetAutoRefresh">reset_auto_refresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetNotificationIntegration">reset_notification_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetRefreshOnCreate">reset_refresh_on_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_refresh` <a name="reset_auto_refresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetAutoRefresh"></a>

```python
def reset_auto_refresh() -> None
```

##### `reset_notification_integration` <a name="reset_notification_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetNotificationIntegration"></a>

```python
def reset_notification_integration() -> None
```

##### `reset_refresh_on_create` <a name="reset_refresh_on_create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetRefreshOnCreate"></a>

```python
def reset_refresh_on_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.autoRefreshInput">auto_refresh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.notificationIntegrationInput">notification_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.refreshOnCreateInput">refresh_on_create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.notificationIntegration">notification_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.refreshOnCreate">refresh_on_create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.autoRefreshInput"></a>

```python
auto_refresh_input: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_integration_input`<sup>Optional</sup> <a name="notification_integration_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.notificationIntegrationInput"></a>

```python
notification_integration_input: str
```

- *Type:* str

---

##### `refresh_on_create_input`<sup>Optional</sup> <a name="refresh_on_create_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.refreshOnCreateInput"></a>

```python
refresh_on_create_input: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_integration`<sup>Required</sup> <a name="notification_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.notificationIntegration"></a>

```python
notification_integration: str
```

- *Type:* str

---

##### `refresh_on_create`<sup>Required</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.refreshOnCreate"></a>

```python
refresh_on_create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a>

---


### StageExternalAzureEncryptionAzureCseOutputReference <a name="StageExternalAzureEncryptionAzureCseOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.masterKeyInput">master_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.masterKey">master_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_key_input`<sup>Optional</sup> <a name="master_key_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.masterKeyInput"></a>

```python
master_key_input: str
```

- *Type:* str

---

##### `master_key`<sup>Required</sup> <a name="master_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.masterKey"></a>

```python
master_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureEncryptionAzureCse
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a>

---


### StageExternalAzureEncryptionNoneOutputReference <a name="StageExternalAzureEncryptionNoneOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a>

---


### StageExternalAzureEncryptionOutputReference <a name="StageExternalAzureEncryptionOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putAzureCse">put_azure_cse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putNone">put_none</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resetAzureCse">reset_azure_cse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resetNone">reset_none</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_cse` <a name="put_azure_cse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putAzureCse"></a>

```python
def put_azure_cse(
  master_key: str
) -> None
```

###### `master_key`<sup>Required</sup> <a name="master_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putAzureCse.parameter.masterKey"></a>

- *Type:* str

Specifies the 128-bit or 256-bit client-side master key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#master_key StageExternalAzure#master_key}

---

##### `put_none` <a name="put_none" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putNone"></a>

```python
def put_none() -> None
```

##### `reset_azure_cse` <a name="reset_azure_cse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resetAzureCse"></a>

```python
def reset_azure_cse() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resetNone"></a>

```python
def reset_none() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.azureCse">azure_cse</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference">StageExternalAzureEncryptionAzureCseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.none">none</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference">StageExternalAzureEncryptionNoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.azureCseInput">azure_cse_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.noneInput">none_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_cse`<sup>Required</sup> <a name="azure_cse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.azureCse"></a>

```python
azure_cse: StageExternalAzureEncryptionAzureCseOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference">StageExternalAzureEncryptionAzureCseOutputReference</a>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.none"></a>

```python
none: StageExternalAzureEncryptionNoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference">StageExternalAzureEncryptionNoneOutputReference</a>

---

##### `azure_cse_input`<sup>Optional</sup> <a name="azure_cse_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.azureCseInput"></a>

```python
azure_cse_input: StageExternalAzureEncryptionAzureCse
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a>

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.noneInput"></a>

```python
none_input: StageExternalAzureEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a>

---


### StageExternalAzureFileFormatAvroOutputReference <a name="StageExternalAzureFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a>

---


### StageExternalAzureFileFormatCsvOutputReference <a name="StageExternalAzureFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEmptyFieldAsNull">reset_empty_field_as_null</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch">reset_error_on_column_count_mismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEscape">reset_escape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEscapeUnenclosedField">reset_escape_unenclosed_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy">reset_field_optionally_enclosed_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetMultiLine">reset_multi_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetParseHeader">reset_parse_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetRecordDelimiter">reset_record_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipBlankLines">reset_skip_blank_lines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipHeader">reset_skip_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_empty_field_as_null` <a name="reset_empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEmptyFieldAsNull"></a>

```python
def reset_empty_field_as_null() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_error_on_column_count_mismatch` <a name="reset_error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch"></a>

```python
def reset_error_on_column_count_mismatch() -> None
```

##### `reset_escape` <a name="reset_escape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEscape"></a>

```python
def reset_escape() -> None
```

##### `reset_escape_unenclosed_field` <a name="reset_escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEscapeUnenclosedField"></a>

```python
def reset_escape_unenclosed_field() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_field_optionally_enclosed_by` <a name="reset_field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy"></a>

```python
def reset_field_optionally_enclosed_by() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_parse_header` <a name="reset_parse_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetParseHeader"></a>

```python
def reset_parse_header() -> None
```

##### `reset_record_delimiter` <a name="reset_record_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetRecordDelimiter"></a>

```python
def reset_record_delimiter() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_blank_lines` <a name="reset_skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipBlankLines"></a>

```python
def reset_skip_blank_lines() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_skip_header` <a name="reset_skip_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipHeader"></a>

```python
def reset_skip_header() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.emptyFieldAsNullInput">empty_field_as_null_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput">error_on_column_count_mismatch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeInput">escape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput">escape_unenclosed_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput">field_optionally_enclosed_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.multiLineInput">multi_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.parseHeaderInput">parse_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.recordDelimiterInput">record_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipBlankLinesInput">skip_blank_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipHeaderInput">skip_header_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.multiLine">multi_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.parseHeader">parse_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `empty_field_as_null_input`<sup>Optional</sup> <a name="empty_field_as_null_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.emptyFieldAsNullInput"></a>

```python
empty_field_as_null_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch_input`<sup>Optional</sup> <a name="error_on_column_count_mismatch_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput"></a>

```python
error_on_column_count_mismatch_input: str
```

- *Type:* str

---

##### `escape_input`<sup>Optional</sup> <a name="escape_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeInput"></a>

```python
escape_input: str
```

- *Type:* str

---

##### `escape_unenclosed_field_input`<sup>Optional</sup> <a name="escape_unenclosed_field_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput"></a>

```python
escape_unenclosed_field_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by_input`<sup>Optional</sup> <a name="field_optionally_enclosed_by_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput"></a>

```python
field_optionally_enclosed_by_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.multiLineInput"></a>

```python
multi_line_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header_input`<sup>Optional</sup> <a name="parse_header_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.parseHeaderInput"></a>

```python
parse_header_input: str
```

- *Type:* str

---

##### `record_delimiter_input`<sup>Optional</sup> <a name="record_delimiter_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.recordDelimiterInput"></a>

```python
record_delimiter_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_blank_lines_input`<sup>Optional</sup> <a name="skip_blank_lines_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipBlankLinesInput"></a>

```python
skip_blank_lines_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `skip_header_input`<sup>Optional</sup> <a name="skip_header_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipHeaderInput"></a>

```python
skip_header_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: str
```

- *Type:* str

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.parseHeader"></a>

```python
parse_header: str
```

- *Type:* str

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipBlankLines"></a>

```python
skip_blank_lines: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a>

---


### StageExternalAzureFileFormatJsonOutputReference <a name="StageExternalAzureFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetAllowDuplicate">reset_allow_duplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetEnableOctal">reset_enable_octal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetIgnoreUtf8Errors">reset_ignore_utf8_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetMultiLine">reset_multi_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetStripNullValues">reset_strip_null_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetStripOuterArray">reset_strip_outer_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_duplicate` <a name="reset_allow_duplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetAllowDuplicate"></a>

```python
def reset_allow_duplicate() -> None
```

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_enable_octal` <a name="reset_enable_octal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetEnableOctal"></a>

```python
def reset_enable_octal() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_ignore_utf8_errors` <a name="reset_ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetIgnoreUtf8Errors"></a>

```python
def reset_ignore_utf8_errors() -> None
```

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_strip_null_values` <a name="reset_strip_null_values" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetStripNullValues"></a>

```python
def reset_strip_null_values() -> None
```

##### `reset_strip_outer_array` <a name="reset_strip_outer_array" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetStripOuterArray"></a>

```python
def reset_strip_outer_array() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.allowDuplicateInput">allow_duplicate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.enableOctalInput">enable_octal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput">ignore_utf8_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.multiLineInput">multi_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripNullValuesInput">strip_null_values_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripOuterArrayInput">strip_outer_array_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.enableOctal">enable_octal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.multiLine">multi_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripNullValues">strip_null_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_duplicate_input`<sup>Optional</sup> <a name="allow_duplicate_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.allowDuplicateInput"></a>

```python
allow_duplicate_input: str
```

- *Type:* str

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `enable_octal_input`<sup>Optional</sup> <a name="enable_octal_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.enableOctalInput"></a>

```python
enable_octal_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `ignore_utf8_errors_input`<sup>Optional</sup> <a name="ignore_utf8_errors_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput"></a>

```python
ignore_utf8_errors_input: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.multiLineInput"></a>

```python
multi_line_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `strip_null_values_input`<sup>Optional</sup> <a name="strip_null_values_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripNullValuesInput"></a>

```python
strip_null_values_input: str
```

- *Type:* str

---

##### `strip_outer_array_input`<sup>Optional</sup> <a name="strip_outer_array_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripOuterArrayInput"></a>

```python
strip_outer_array_input: str
```

- *Type:* str

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.allowDuplicate"></a>

```python
allow_duplicate: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.enableOctal"></a>

```python
enable_octal: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripNullValues"></a>

```python
strip_null_values: str
```

- *Type:* str

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripOuterArray"></a>

```python
strip_outer_array: str
```

- *Type:* str

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a>

---


### StageExternalAzureFileFormatOrcOutputReference <a name="StageExternalAzureFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a>

---


### StageExternalAzureFileFormatOutputReference <a name="StageExternalAzureFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro">put_avro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putOrc">put_orc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet">put_parquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml">put_xml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetAvro">reset_avro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetCsv">reset_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetFormatName">reset_format_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetOrc">reset_orc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetParquet">reset_parquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetXml">reset_xml</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro` <a name="put_avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro"></a>

```python
def put_avro(
  compression: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
) -> None
```

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro.parameter.compression"></a>

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

##### `put_csv` <a name="put_csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv"></a>

```python
def put_csv(
  binary_format: str = None,
  compression: str = None,
  date_format: str = None,
  empty_field_as_null: str = None,
  encoding: str = None,
  error_on_column_count_mismatch: str = None,
  escape: str = None,
  escape_unenclosed_field: str = None,
  field_delimiter: str = None,
  field_optionally_enclosed_by: str = None,
  file_extension: str = None,
  multi_line: str = None,
  null_if: typing.List[str] = None,
  parse_header: str = None,
  record_delimiter: str = None,
  replace_invalid_characters: str = None,
  skip_blank_lines: str = None,
  skip_byte_order_mark: str = None,
  skip_header: typing.Union[int, float] = None,
  time_format: str = None,
  timestamp_format: str = None,
  trim_space: str = None
) -> None
```

###### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#binary_format StageExternalAzure#binary_format}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

###### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#date_format StageExternalAzure#date_format}

---

###### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.emptyFieldAsNull"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#empty_field_as_null StageExternalAzure#empty_field_as_null}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.encoding"></a>

- *Type:* str

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#encoding StageExternalAzure#encoding}

---

###### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.errorOnColumnCountMismatch"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#error_on_column_count_mismatch StageExternalAzure#error_on_column_count_mismatch}

---

###### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.escape"></a>

- *Type:* str

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#escape StageExternalAzure#escape}

---

###### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.escapeUnenclosedField"></a>

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#escape_unenclosed_field StageExternalAzure#escape_unenclosed_field}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.fieldDelimiter"></a>

- *Type:* str

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#field_delimiter StageExternalAzure#field_delimiter}

---

###### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.fieldOptionallyEnclosedBy"></a>

- *Type:* str

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#field_optionally_enclosed_by StageExternalAzure#field_optionally_enclosed_by}

---

###### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#file_extension StageExternalAzure#file_extension}

---

###### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.multiLine"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#multi_line StageExternalAzure#multi_line}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

###### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.parseHeader"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#parse_header StageExternalAzure#parse_header}

---

###### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.recordDelimiter"></a>

- *Type:* str

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#record_delimiter StageExternalAzure#record_delimiter}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

###### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.skipBlankLines"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_blank_lines StageExternalAzure#skip_blank_lines}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

###### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.skipHeader"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_header StageExternalAzure#skip_header}

---

###### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#time_format StageExternalAzure#time_format}

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#timestamp_format StageExternalAzure#timestamp_format}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

##### `put_json` <a name="put_json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson"></a>

```python
def put_json(
  allow_duplicate: str = None,
  binary_format: str = None,
  compression: str = None,
  date_format: str = None,
  enable_octal: str = None,
  file_extension: str = None,
  ignore_utf8_errors: str = None,
  multi_line: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  skip_byte_order_mark: str = None,
  strip_null_values: str = None,
  strip_outer_array: str = None,
  time_format: str = None,
  timestamp_format: str = None,
  trim_space: str = None
) -> None
```

###### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.allowDuplicate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#allow_duplicate StageExternalAzure#allow_duplicate}

---

###### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#binary_format StageExternalAzure#binary_format}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

###### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#date_format StageExternalAzure#date_format}

---

###### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.enableOctal"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#enable_octal StageExternalAzure#enable_octal}

---

###### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#file_extension StageExternalAzure#file_extension}

---

###### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.ignoreUtf8Errors"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#ignore_utf8_errors StageExternalAzure#ignore_utf8_errors}

---

###### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.multiLine"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#multi_line StageExternalAzure#multi_line}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

###### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.stripNullValues"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#strip_null_values StageExternalAzure#strip_null_values}

---

###### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.stripOuterArray"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#strip_outer_array StageExternalAzure#strip_outer_array}

---

###### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#time_format StageExternalAzure#time_format}

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#timestamp_format StageExternalAzure#timestamp_format}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

##### `put_orc` <a name="put_orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putOrc"></a>

```python
def put_orc(
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
) -> None
```

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putOrc.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putOrc.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putOrc.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

##### `put_parquet` <a name="put_parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet"></a>

```python
def put_parquet(
  binary_as_text: str = None,
  compression: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None,
  use_logical_type: str = None,
  use_vectorized_scanner: str = None
) -> None
```

###### `binary_as_text`<sup>Optional</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet.parameter.binaryAsText"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#binary_as_text StageExternalAzure#binary_as_text}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet.parameter.compression"></a>

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

###### `use_logical_type`<sup>Optional</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet.parameter.useLogicalType"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#use_logical_type StageExternalAzure#use_logical_type}

---

###### `use_vectorized_scanner`<sup>Optional</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet.parameter.useVectorizedScanner"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#use_vectorized_scanner StageExternalAzure#use_vectorized_scanner}

---

##### `put_xml` <a name="put_xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml"></a>

```python
def put_xml(
  compression: str = None,
  disable_auto_convert: str = None,
  ignore_utf8_errors: str = None,
  preserve_space: str = None,
  replace_invalid_characters: str = None,
  skip_byte_order_mark: str = None,
  strip_outer_element: str = None
) -> None
```

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

###### `disable_auto_convert`<sup>Optional</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml.parameter.disableAutoConvert"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#disable_auto_convert StageExternalAzure#disable_auto_convert}

---

###### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml.parameter.ignoreUtf8Errors"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#ignore_utf8_errors StageExternalAzure#ignore_utf8_errors}

---

###### `preserve_space`<sup>Optional</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml.parameter.preserveSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#preserve_space StageExternalAzure#preserve_space}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

###### `strip_outer_element`<sup>Optional</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml.parameter.stripOuterElement"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_azure#strip_outer_element StageExternalAzure#strip_outer_element}

---

##### `reset_avro` <a name="reset_avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetAvro"></a>

```python
def reset_avro() -> None
```

##### `reset_csv` <a name="reset_csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```

##### `reset_format_name` <a name="reset_format_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetFormatName"></a>

```python
def reset_format_name() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_orc` <a name="reset_orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetOrc"></a>

```python
def reset_orc() -> None
```

##### `reset_parquet` <a name="reset_parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetParquet"></a>

```python
def reset_parquet() -> None
```

##### `reset_xml` <a name="reset_xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetXml"></a>

```python
def reset_xml() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference">StageExternalAzureFileFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference">StageExternalAzureFileFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference">StageExternalAzureFileFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference">StageExternalAzureFileFormatOrcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference">StageExternalAzureFileFormatParquetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference">StageExternalAzureFileFormatXmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.avroInput">avro_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.csvInput">csv_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.formatNameInput">format_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.orcInput">orc_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.parquetInput">parquet_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.xmlInput">xml_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.formatName">format_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.avro"></a>

```python
avro: StageExternalAzureFileFormatAvroOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference">StageExternalAzureFileFormatAvroOutputReference</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.csv"></a>

```python
csv: StageExternalAzureFileFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference">StageExternalAzureFileFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.json"></a>

```python
json: StageExternalAzureFileFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference">StageExternalAzureFileFormatJsonOutputReference</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.orc"></a>

```python
orc: StageExternalAzureFileFormatOrcOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference">StageExternalAzureFileFormatOrcOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.parquet"></a>

```python
parquet: StageExternalAzureFileFormatParquetOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference">StageExternalAzureFileFormatParquetOutputReference</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.xml"></a>

```python
xml: StageExternalAzureFileFormatXmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference">StageExternalAzureFileFormatXmlOutputReference</a>

---

##### `avro_input`<sup>Optional</sup> <a name="avro_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.avroInput"></a>

```python
avro_input: StageExternalAzureFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.csvInput"></a>

```python
csv_input: StageExternalAzureFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a>

---

##### `format_name_input`<sup>Optional</sup> <a name="format_name_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.formatNameInput"></a>

```python
format_name_input: str
```

- *Type:* str

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.jsonInput"></a>

```python
json_input: StageExternalAzureFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a>

---

##### `orc_input`<sup>Optional</sup> <a name="orc_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.orcInput"></a>

```python
orc_input: StageExternalAzureFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a>

---

##### `parquet_input`<sup>Optional</sup> <a name="parquet_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.parquetInput"></a>

```python
parquet_input: StageExternalAzureFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a>

---

##### `xml_input`<sup>Optional</sup> <a name="xml_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.xmlInput"></a>

```python
xml_input: StageExternalAzureFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a>

---

##### `format_name`<sup>Required</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a>

---


### StageExternalAzureFileFormatParquetOutputReference <a name="StageExternalAzureFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetBinaryAsText">reset_binary_as_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetUseLogicalType">reset_use_logical_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetUseVectorizedScanner">reset_use_vectorized_scanner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_as_text` <a name="reset_binary_as_text" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetBinaryAsText"></a>

```python
def reset_binary_as_text() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```

##### `reset_use_logical_type` <a name="reset_use_logical_type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetUseLogicalType"></a>

```python
def reset_use_logical_type() -> None
```

##### `reset_use_vectorized_scanner` <a name="reset_use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetUseVectorizedScanner"></a>

```python
def reset_use_vectorized_scanner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.binaryAsTextInput">binary_as_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useLogicalTypeInput">use_logical_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useVectorizedScannerInput">use_vectorized_scanner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.binaryAsText">binary_as_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useLogicalType">use_logical_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_as_text_input`<sup>Optional</sup> <a name="binary_as_text_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.binaryAsTextInput"></a>

```python
binary_as_text_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `use_logical_type_input`<sup>Optional</sup> <a name="use_logical_type_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useLogicalTypeInput"></a>

```python
use_logical_type_input: str
```

- *Type:* str

---

##### `use_vectorized_scanner_input`<sup>Optional</sup> <a name="use_vectorized_scanner_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useVectorizedScannerInput"></a>

```python
use_vectorized_scanner_input: str
```

- *Type:* str

---

##### `binary_as_text`<sup>Required</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.binaryAsText"></a>

```python
binary_as_text: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `use_logical_type`<sup>Required</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useLogicalType"></a>

```python
use_logical_type: str
```

- *Type:* str

---

##### `use_vectorized_scanner`<sup>Required</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a>

---


### StageExternalAzureFileFormatXmlOutputReference <a name="StageExternalAzureFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetDisableAutoConvert">reset_disable_auto_convert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetIgnoreUtf8Errors">reset_ignore_utf8_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetPreserveSpace">reset_preserve_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetStripOuterElement">reset_strip_outer_element</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_disable_auto_convert` <a name="reset_disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetDisableAutoConvert"></a>

```python
def reset_disable_auto_convert() -> None
```

##### `reset_ignore_utf8_errors` <a name="reset_ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetIgnoreUtf8Errors"></a>

```python
def reset_ignore_utf8_errors() -> None
```

##### `reset_preserve_space` <a name="reset_preserve_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetPreserveSpace"></a>

```python
def reset_preserve_space() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_strip_outer_element` <a name="reset_strip_outer_element" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetStripOuterElement"></a>

```python
def reset_strip_outer_element() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.disableAutoConvertInput">disable_auto_convert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput">ignore_utf8_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.preserveSpaceInput">preserve_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.stripOuterElementInput">strip_outer_element_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.disableAutoConvert">disable_auto_convert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.preserveSpace">preserve_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.stripOuterElement">strip_outer_element</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `disable_auto_convert_input`<sup>Optional</sup> <a name="disable_auto_convert_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.disableAutoConvertInput"></a>

```python
disable_auto_convert_input: str
```

- *Type:* str

---

##### `ignore_utf8_errors_input`<sup>Optional</sup> <a name="ignore_utf8_errors_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput"></a>

```python
ignore_utf8_errors_input: str
```

- *Type:* str

---

##### `preserve_space_input`<sup>Optional</sup> <a name="preserve_space_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.preserveSpaceInput"></a>

```python
preserve_space_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `strip_outer_element_input`<sup>Optional</sup> <a name="strip_outer_element_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.stripOuterElementInput"></a>

```python
strip_outer_element_input: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `disable_auto_convert`<sup>Required</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```python
disable_auto_convert: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

---

##### `preserve_space`<sup>Required</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.preserveSpace"></a>

```python
preserve_space: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `strip_outer_element`<sup>Required</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.stripOuterElement"></a>

```python
strip_outer_element: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a>

---


### StageExternalAzureShowOutputList <a name="StageExternalAzureShowOutputList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalAzureShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalAzureShowOutputOutputReference <a name="StageExternalAzureShowOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.directoryEnabled">directory_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.hasCredentials">has_credentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.hasEncryptionKey">has_encryption_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.storageIntegration">storage_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutput">StageExternalAzureShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `directory_enabled`<sup>Required</sup> <a name="directory_enabled" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.directoryEnabled"></a>

```python
directory_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `has_credentials`<sup>Required</sup> <a name="has_credentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.hasCredentials"></a>

```python
has_credentials: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `has_encryption_key`<sup>Required</sup> <a name="has_encryption_key" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.hasEncryptionKey"></a>

```python
has_encryption_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalAzureShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutput">StageExternalAzureShowOutput</a>

---


### StageExternalAzureTimeoutsOutputReference <a name="StageExternalAzureTimeoutsOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_azure

stageExternalAzure.StageExternalAzureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StageExternalAzureTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a>

---



