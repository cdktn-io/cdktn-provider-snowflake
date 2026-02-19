# `stageExternalGcs` Submodule <a name="`stageExternalGcs` Submodule" id="@cdktn/provider-snowflake.stageExternalGcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageExternalGcs <a name="StageExternalGcs" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs snowflake_stage_external_gcs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcs(
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
  storage_integration: str,
  url: str,
  comment: str = None,
  directory: StageExternalGcsDirectory = None,
  encryption: StageExternalGcsEncryption = None,
  file_format: StageExternalGcsFileFormat = None,
  id: str = None,
  timeouts: StageExternalGcsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.storageIntegration">storage_integration</a></code> | <code>str</code> | Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.url">url</a></code> | <code>str</code> | Specifies the URL for the GCS bucket (e.g., 'gcs://bucket/path/'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#id StageExternalGcs#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#database StageExternalGcs#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#name StageExternalGcs#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#schema StageExternalGcs#schema}

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.storageIntegration"></a>

- *Type:* str

Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity.

GCS stages require a storage integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#storage_integration StageExternalGcs#storage_integration}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.url"></a>

- *Type:* str

Specifies the URL for the GCS bucket (e.g., 'gcs://bucket/path/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#url StageExternalGcs#url}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#comment StageExternalGcs#comment}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.directory"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#directory StageExternalGcs#directory}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#encryption StageExternalGcs#encryption}

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.fileFormat"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#file_format StageExternalGcs#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#id StageExternalGcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#timeouts StageExternalGcs#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory">put_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat">put_file_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetFileFormat">reset_file_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_directory` <a name="put_directory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory"></a>

```python
def put_directory(
  enable: bool | IResolvable,
  auto_refresh: str = None,
  notification_integration: str = None,
  refresh_on_create: str = None
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#enable StageExternalGcs#enable}

---

###### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory.parameter.autoRefresh"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#auto_refresh StageExternalGcs#auto_refresh}

---

###### `notification_integration`<sup>Optional</sup> <a name="notification_integration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory.parameter.notificationIntegration"></a>

- *Type:* str

Specifies the name of the notification integration used to automatically refresh the directory table metadata.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#notification_integration StageExternalGcs#notification_integration}

---

###### `refresh_on_create`<sup>Optional</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putDirectory.parameter.refreshOnCreate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#refresh_on_create StageExternalGcs#refresh_on_create}

---

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putEncryption"></a>

```python
def put_encryption(
  gcs_sse_kms: StageExternalGcsEncryptionGcsSseKms = None,
  none: StageExternalGcsEncryptionNone = None
) -> None
```

###### `gcs_sse_kms`<sup>Optional</sup> <a name="gcs_sse_kms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putEncryption.parameter.gcsSseKms"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a>

gcs_sse_kms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#gcs_sse_kms StageExternalGcs#gcs_sse_kms}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putEncryption.parameter.none"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#none StageExternalGcs#none}

---

##### `put_file_format` <a name="put_file_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat"></a>

```python
def put_file_format(
  avro: StageExternalGcsFileFormatAvro = None,
  csv: StageExternalGcsFileFormatCsv = None,
  format_name: str = None,
  json: StageExternalGcsFileFormatJson = None,
  orc: StageExternalGcsFileFormatOrc = None,
  parquet: StageExternalGcsFileFormatParquet = None,
  xml: StageExternalGcsFileFormatXml = None
) -> None
```

###### `avro`<sup>Optional</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat.parameter.avro"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#avro StageExternalGcs#avro}

---

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat.parameter.csv"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#csv StageExternalGcs#csv}

---

###### `format_name`<sup>Optional</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat.parameter.formatName"></a>

- *Type:* str

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#format_name StageExternalGcs#format_name}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat.parameter.json"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#json StageExternalGcs#json}

---

###### `orc`<sup>Optional</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat.parameter.orc"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#orc StageExternalGcs#orc}

---

###### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat.parameter.parquet"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#parquet StageExternalGcs#parquet}

---

###### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putFileFormat.parameter.xml"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#xml StageExternalGcs#xml}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#create StageExternalGcs#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#delete StageExternalGcs#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#read StageExternalGcs#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#update StageExternalGcs#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_directory` <a name="reset_directory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_file_format` <a name="reset_file_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetFileFormat"></a>

```python
def reset_file_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StageExternalGcs resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isConstruct"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcs.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StageExternalGcs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StageExternalGcs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StageExternalGcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StageExternalGcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList">StageExternalGcsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference">StageExternalGcsDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference">StageExternalGcsEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference">StageExternalGcsFileFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList">StageExternalGcsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.stageType">stage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference">StageExternalGcsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.directoryInput">directory_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.encryptionInput">encryption_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fileFormatInput">file_format_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.storageIntegrationInput">storage_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.storageIntegration">storage_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.describeOutput"></a>

```python
describe_output: StageExternalGcsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList">StageExternalGcsDescribeOutputList</a>

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.directory"></a>

```python
directory: StageExternalGcsDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference">StageExternalGcsDirectoryOutputReference</a>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.encryption"></a>

```python
encryption: StageExternalGcsEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference">StageExternalGcsEncryptionOutputReference</a>

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fileFormat"></a>

```python
file_format: StageExternalGcsFileFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference">StageExternalGcsFileFormatOutputReference</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.showOutput"></a>

```python
show_output: StageExternalGcsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList">StageExternalGcsShowOutputList</a>

---

##### `stage_type`<sup>Required</sup> <a name="stage_type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.stageType"></a>

```python
stage_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.timeouts"></a>

```python
timeouts: StageExternalGcsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference">StageExternalGcsTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.directoryInput"></a>

```python
directory_input: StageExternalGcsDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.encryptionInput"></a>

```python
encryption_input: StageExternalGcsEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a>

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.fileFormatInput"></a>

```python
file_format_input: StageExternalGcsFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `storage_integration_input`<sup>Optional</sup> <a name="storage_integration_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.storageIntegrationInput"></a>

```python
storage_integration_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StageExternalGcsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StageExternalGcsConfig <a name="StageExternalGcsConfig" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsConfig(
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
  storage_integration: str,
  url: str,
  comment: str = None,
  directory: StageExternalGcsDirectory = None,
  encryption: StageExternalGcsEncryption = None,
  file_format: StageExternalGcsFileFormat = None,
  id: str = None,
  timeouts: StageExternalGcsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.storageIntegration">storage_integration</a></code> | <code>str</code> | Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.url">url</a></code> | <code>str</code> | Specifies the URL for the GCS bucket (e.g., 'gcs://bucket/path/'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#id StageExternalGcs#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#database StageExternalGcs#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#name StageExternalGcs#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#schema StageExternalGcs#schema}

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity.

GCS stages require a storage integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#storage_integration StageExternalGcs#storage_integration}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Specifies the URL for the GCS bucket (e.g., 'gcs://bucket/path/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#url StageExternalGcs#url}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#comment StageExternalGcs#comment}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.directory"></a>

```python
directory: StageExternalGcsDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#directory StageExternalGcs#directory}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.encryption"></a>

```python
encryption: StageExternalGcsEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#encryption StageExternalGcs#encryption}

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.fileFormat"></a>

```python
file_format: StageExternalGcsFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#file_format StageExternalGcs#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#id StageExternalGcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsConfig.property.timeouts"></a>

```python
timeouts: StageExternalGcsTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#timeouts StageExternalGcs#timeouts}

---

### StageExternalGcsDescribeOutput <a name="StageExternalGcsDescribeOutput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutput()
```


### StageExternalGcsDescribeOutputDirectoryTable <a name="StageExternalGcsDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable()
```


### StageExternalGcsDescribeOutputFileFormat <a name="StageExternalGcsDescribeOutputFileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormat.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormat()
```


### StageExternalGcsDescribeOutputFileFormatAvro <a name="StageExternalGcsDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro()
```


### StageExternalGcsDescribeOutputFileFormatCsv <a name="StageExternalGcsDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv()
```


### StageExternalGcsDescribeOutputFileFormatJson <a name="StageExternalGcsDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson()
```


### StageExternalGcsDescribeOutputFileFormatOrc <a name="StageExternalGcsDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc()
```


### StageExternalGcsDescribeOutputFileFormatParquet <a name="StageExternalGcsDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet()
```


### StageExternalGcsDescribeOutputFileFormatXml <a name="StageExternalGcsDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml()
```


### StageExternalGcsDirectory <a name="StageExternalGcsDirectory" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDirectory(
  enable: bool | IResolvable,
  auto_refresh: str = None,
  notification_integration: str = None,
  refresh_on_create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable a directory table on the external stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.notificationIntegration">notification_integration</a></code> | <code>str</code> | Specifies the name of the notification integration used to automatically refresh the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.refreshOnCreate">refresh_on_create</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#enable StageExternalGcs#enable}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#auto_refresh StageExternalGcs#auto_refresh}

---

##### `notification_integration`<sup>Optional</sup> <a name="notification_integration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.notificationIntegration"></a>

```python
notification_integration: str
```

- *Type:* str

Specifies the name of the notification integration used to automatically refresh the directory table metadata.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#notification_integration StageExternalGcs#notification_integration}

---

##### `refresh_on_create`<sup>Optional</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory.property.refreshOnCreate"></a>

```python
refresh_on_create: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#refresh_on_create StageExternalGcs#refresh_on_create}

---

### StageExternalGcsEncryption <a name="StageExternalGcsEncryption" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsEncryption(
  gcs_sse_kms: StageExternalGcsEncryptionGcsSseKms = None,
  none: StageExternalGcsEncryptionNone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.property.gcsSseKms">gcs_sse_kms</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a></code> | gcs_sse_kms block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.property.none">none</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a></code> | none block. |

---

##### `gcs_sse_kms`<sup>Optional</sup> <a name="gcs_sse_kms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.property.gcsSseKms"></a>

```python
gcs_sse_kms: StageExternalGcsEncryptionGcsSseKms
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a>

gcs_sse_kms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#gcs_sse_kms StageExternalGcs#gcs_sse_kms}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption.property.none"></a>

```python
none: StageExternalGcsEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#none StageExternalGcs#none}

---

### StageExternalGcsEncryptionGcsSseKms <a name="StageExternalGcsEncryptionGcsSseKms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsEncryptionGcsSseKms(
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Specifies the KMS-managed key ID. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Specifies the KMS-managed key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#kms_key_id StageExternalGcs#kms_key_id}

---

### StageExternalGcsEncryptionNone <a name="StageExternalGcsEncryptionNone" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsEncryptionNone()
```


### StageExternalGcsFileFormat <a name="StageExternalGcsFileFormat" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormat(
  avro: StageExternalGcsFileFormatAvro = None,
  csv: StageExternalGcsFileFormatCsv = None,
  format_name: str = None,
  json: StageExternalGcsFileFormatJson = None,
  orc: StageExternalGcsFileFormatOrc = None,
  parquet: StageExternalGcsFileFormatParquet = None,
  xml: StageExternalGcsFileFormatXml = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.formatName">format_name</a></code> | <code>str</code> | Fully qualified name of the file format (e.g., 'database.schema.format_name'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a></code> | json block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a></code> | orc block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a></code> | parquet block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a></code> | xml block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.avro"></a>

```python
avro: StageExternalGcsFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#avro StageExternalGcs#avro}

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.csv"></a>

```python
csv: StageExternalGcsFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#csv StageExternalGcs#csv}

---

##### `format_name`<sup>Optional</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#format_name StageExternalGcs#format_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.json"></a>

```python
json: StageExternalGcsFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#json StageExternalGcs#json}

---

##### `orc`<sup>Optional</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.orc"></a>

```python
orc: StageExternalGcsFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#orc StageExternalGcs#orc}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.parquet"></a>

```python
parquet: StageExternalGcsFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#parquet StageExternalGcs#parquet}

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat.property.xml"></a>

```python
xml: StageExternalGcsFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#xml StageExternalGcs#xml}

---

### StageExternalGcsFileFormatAvro <a name="StageExternalGcsFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatAvro(
  compression: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. Valid values: `AUTO` \| `GZIP` \| `BROTLI` \| `ZSTD` \| `DEFLATE` \| `RAW_DEFLATE` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

### StageExternalGcsFileFormatCsv <a name="StageExternalGcsFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatCsv(
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.encoding">encoding</a></code> | <code>str</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.escape">escape</a></code> | <code>str</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.parseHeader">parse_header</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#binary_format StageExternalGcs#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#date_format StageExternalGcs#date_format}

---

##### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#empty_field_as_null StageExternalGcs#empty_field_as_null}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#encoding StageExternalGcs#encoding}

---

##### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#error_on_column_count_mismatch StageExternalGcs#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.escape"></a>

```python
escape: str
```

- *Type:* str

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#escape StageExternalGcs#escape}

---

##### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#escape_unenclosed_field StageExternalGcs#escape_unenclosed_field}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#field_delimiter StageExternalGcs#field_delimiter}

---

##### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#field_optionally_enclosed_by StageExternalGcs#field_optionally_enclosed_by}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#file_extension StageExternalGcs#file_extension}

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#multi_line StageExternalGcs#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.parseHeader"></a>

```python
parse_header: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#parse_header StageExternalGcs#parse_header}

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#record_delimiter StageExternalGcs#record_delimiter}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipBlankLines"></a>

```python
skip_blank_lines: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_blank_lines StageExternalGcs#skip_blank_lines}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

##### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_header StageExternalGcs#skip_header}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#time_format StageExternalGcs#time_format}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#timestamp_format StageExternalGcs#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

### StageExternalGcsFileFormatJson <a name="StageExternalGcsFileFormatJson" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatJson(
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.enableOctal">enable_octal</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.stripNullValues">strip_null_values</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.allowDuplicate"></a>

```python
allow_duplicate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#allow_duplicate StageExternalGcs#allow_duplicate}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#binary_format StageExternalGcs#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#date_format StageExternalGcs#date_format}

---

##### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.enableOctal"></a>

```python
enable_octal: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#enable_octal StageExternalGcs#enable_octal}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#file_extension StageExternalGcs#file_extension}

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#ignore_utf8_errors StageExternalGcs#ignore_utf8_errors}

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#multi_line StageExternalGcs#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

##### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.stripNullValues"></a>

```python
strip_null_values: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#strip_null_values StageExternalGcs#strip_null_values}

---

##### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.stripOuterArray"></a>

```python
strip_outer_array: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#strip_outer_array StageExternalGcs#strip_outer_array}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#time_format StageExternalGcs#time_format}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#timestamp_format StageExternalGcs#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

### StageExternalGcsFileFormatOrc <a name="StageExternalGcsFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatOrc(
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

### StageExternalGcsFileFormatParquet <a name="StageExternalGcsFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatParquet(
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.binaryAsText">binary_as_text</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. Valid values: `AUTO` \| `LZO` \| `SNAPPY` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.useLogicalType">use_logical_type</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. |

---

##### `binary_as_text`<sup>Optional</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.binaryAsText"></a>

```python
binary_as_text: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#binary_as_text StageExternalGcs#binary_as_text}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

##### `use_logical_type`<sup>Optional</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.useLogicalType"></a>

```python
use_logical_type: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#use_logical_type StageExternalGcs#use_logical_type}

---

##### `use_vectorized_scanner`<sup>Optional</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#use_vectorized_scanner StageExternalGcs#use_vectorized_scanner}

---

### StageExternalGcsFileFormatXml <a name="StageExternalGcsFileFormatXml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatXml(
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.disableAutoConvert">disable_auto_convert</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.preserveSpace">preserve_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.stripOuterElement">strip_outer_element</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

##### `disable_auto_convert`<sup>Optional</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.disableAutoConvert"></a>

```python
disable_auto_convert: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#disable_auto_convert StageExternalGcs#disable_auto_convert}

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#ignore_utf8_errors StageExternalGcs#ignore_utf8_errors}

---

##### `preserve_space`<sup>Optional</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.preserveSpace"></a>

```python
preserve_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#preserve_space StageExternalGcs#preserve_space}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

##### `strip_outer_element`<sup>Optional</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml.property.stripOuterElement"></a>

```python
strip_outer_element: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#strip_outer_element StageExternalGcs#strip_outer_element}

---

### StageExternalGcsShowOutput <a name="StageExternalGcsShowOutput" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsShowOutput()
```


### StageExternalGcsTimeouts <a name="StageExternalGcsTimeouts" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#create StageExternalGcs#create}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#delete StageExternalGcs#delete}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#read StageExternalGcs#read}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#update StageExternalGcs#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#create StageExternalGcs#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#delete StageExternalGcs#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#read StageExternalGcs#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#update StageExternalGcs#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StageExternalGcsDescribeOutputDirectoryTableList <a name="StageExternalGcsDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputDirectoryTableOutputReference <a name="StageExternalGcsDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.autoRefresh">auto_refresh</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable">StageExternalGcsDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```python
auto_refresh: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```python
enable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutputDirectoryTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTable">StageExternalGcsDescribeOutputDirectoryTable</a>

---


### StageExternalGcsDescribeOutputFileFormatAvroList <a name="StageExternalGcsDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputFileFormatAvroOutputReference <a name="StageExternalGcsDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro">StageExternalGcsDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutputFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvro">StageExternalGcsDescribeOutputFileFormatAvro</a>

---


### StageExternalGcsDescribeOutputFileFormatCsvList <a name="StageExternalGcsDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputFileFormatCsvOutputReference <a name="StageExternalGcsDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.parseHeader">parse_header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">skip_blank_lines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">validate_utf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv">StageExternalGcsDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```python
parse_header: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```python
skip_blank_lines: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate_utf8`<sup>Required</sup> <a name="validate_utf8" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```python
validate_utf8: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutputFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsv">StageExternalGcsDescribeOutputFileFormatCsv</a>

---


### StageExternalGcsDescribeOutputFileFormatJsonList <a name="StageExternalGcsDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputFileFormatJsonOutputReference <a name="StageExternalGcsDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">allow_duplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.enableOctal">enable_octal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">strip_null_values</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">strip_outer_array</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson">StageExternalGcsDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```python
allow_duplicate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```python
enable_octal: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```python
strip_null_values: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```python
strip_outer_array: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutputFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJson">StageExternalGcsDescribeOutputFileFormatJson</a>

---


### StageExternalGcsDescribeOutputFileFormatList <a name="StageExternalGcsDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputFileFormatOrcList <a name="StageExternalGcsDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputFileFormatOrcOutputReference <a name="StageExternalGcsDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc">StageExternalGcsDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutputFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrc">StageExternalGcsDescribeOutputFileFormatOrc</a>

---


### StageExternalGcsDescribeOutputFileFormatOutputReference <a name="StageExternalGcsDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList">StageExternalGcsDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList">StageExternalGcsDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.formatName">format_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList">StageExternalGcsDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList">StageExternalGcsDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList">StageExternalGcsDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList">StageExternalGcsDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormat">StageExternalGcsDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.avro"></a>

```python
avro: StageExternalGcsDescribeOutputFileFormatAvroList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatAvroList">StageExternalGcsDescribeOutputFileFormatAvroList</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.csv"></a>

```python
csv: StageExternalGcsDescribeOutputFileFormatCsvList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatCsvList">StageExternalGcsDescribeOutputFileFormatCsvList</a>

---

##### `format_name`<sup>Required</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.json"></a>

```python
json: StageExternalGcsDescribeOutputFileFormatJsonList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatJsonList">StageExternalGcsDescribeOutputFileFormatJsonList</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.orc"></a>

```python
orc: StageExternalGcsDescribeOutputFileFormatOrcList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOrcList">StageExternalGcsDescribeOutputFileFormatOrcList</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.parquet"></a>

```python
parquet: StageExternalGcsDescribeOutputFileFormatParquetList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList">StageExternalGcsDescribeOutputFileFormatParquetList</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.xml"></a>

```python
xml: StageExternalGcsDescribeOutputFileFormatXmlList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList">StageExternalGcsDescribeOutputFileFormatXmlList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutputFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormat">StageExternalGcsDescribeOutputFileFormat</a>

---


### StageExternalGcsDescribeOutputFileFormatParquetList <a name="StageExternalGcsDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputFileFormatParquetOutputReference <a name="StageExternalGcsDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">binary_as_text</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">use_logical_type</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet">StageExternalGcsDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_as_text`<sup>Required</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```python
binary_as_text: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_logical_type`<sup>Required</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```python
use_logical_type: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_vectorized_scanner`<sup>Required</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutputFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatParquet">StageExternalGcsDescribeOutputFileFormatParquet</a>

---


### StageExternalGcsDescribeOutputFileFormatXmlList <a name="StageExternalGcsDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputFileFormatXmlOutputReference <a name="StageExternalGcsDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">disable_auto_convert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">preserve_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">strip_outer_element</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml">StageExternalGcsDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `disable_auto_convert`<sup>Required</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```python
disable_auto_convert: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preserve_space`<sup>Required</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```python
preserve_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_element`<sup>Required</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```python
strip_outer_element: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutputFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatXml">StageExternalGcsDescribeOutputFileFormatXml</a>

---


### StageExternalGcsDescribeOutputList <a name="StageExternalGcsDescribeOutputList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsDescribeOutputOutputReference <a name="StageExternalGcsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.directoryTable">directory_table</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList">StageExternalGcsDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList">StageExternalGcsDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutput">StageExternalGcsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_table`<sup>Required</sup> <a name="directory_table" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.directoryTable"></a>

```python
directory_table: StageExternalGcsDescribeOutputDirectoryTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputDirectoryTableList">StageExternalGcsDescribeOutputDirectoryTableList</a>

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.fileFormat"></a>

```python
file_format: StageExternalGcsDescribeOutputFileFormatList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputFileFormatList">StageExternalGcsDescribeOutputFileFormatList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDescribeOutput">StageExternalGcsDescribeOutput</a>

---


### StageExternalGcsDirectoryOutputReference <a name="StageExternalGcsDirectoryOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetAutoRefresh">reset_auto_refresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetNotificationIntegration">reset_notification_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetRefreshOnCreate">reset_refresh_on_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_refresh` <a name="reset_auto_refresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetAutoRefresh"></a>

```python
def reset_auto_refresh() -> None
```

##### `reset_notification_integration` <a name="reset_notification_integration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetNotificationIntegration"></a>

```python
def reset_notification_integration() -> None
```

##### `reset_refresh_on_create` <a name="reset_refresh_on_create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.resetRefreshOnCreate"></a>

```python
def reset_refresh_on_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.autoRefreshInput">auto_refresh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.notificationIntegrationInput">notification_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.refreshOnCreateInput">refresh_on_create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.notificationIntegration">notification_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.refreshOnCreate">refresh_on_create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.autoRefreshInput"></a>

```python
auto_refresh_input: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_integration_input`<sup>Optional</sup> <a name="notification_integration_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.notificationIntegrationInput"></a>

```python
notification_integration_input: str
```

- *Type:* str

---

##### `refresh_on_create_input`<sup>Optional</sup> <a name="refresh_on_create_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.refreshOnCreateInput"></a>

```python
refresh_on_create_input: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_integration`<sup>Required</sup> <a name="notification_integration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.notificationIntegration"></a>

```python
notification_integration: str
```

- *Type:* str

---

##### `refresh_on_create`<sup>Required</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.refreshOnCreate"></a>

```python
refresh_on_create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsDirectory">StageExternalGcsDirectory</a>

---


### StageExternalGcsEncryptionGcsSseKmsOutputReference <a name="StageExternalGcsEncryptionGcsSseKmsOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsEncryptionGcsSseKms
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a>

---


### StageExternalGcsEncryptionNoneOutputReference <a name="StageExternalGcsEncryptionNoneOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a>

---


### StageExternalGcsEncryptionOutputReference <a name="StageExternalGcsEncryptionOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putGcsSseKms">put_gcs_sse_kms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putNone">put_none</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resetGcsSseKms">reset_gcs_sse_kms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resetNone">reset_none</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcs_sse_kms` <a name="put_gcs_sse_kms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putGcsSseKms"></a>

```python
def put_gcs_sse_kms(
  kms_key_id: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putGcsSseKms.parameter.kmsKeyId"></a>

- *Type:* str

Specifies the KMS-managed key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#kms_key_id StageExternalGcs#kms_key_id}

---

##### `put_none` <a name="put_none" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.putNone"></a>

```python
def put_none() -> None
```

##### `reset_gcs_sse_kms` <a name="reset_gcs_sse_kms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resetGcsSseKms"></a>

```python
def reset_gcs_sse_kms() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.resetNone"></a>

```python
def reset_none() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.gcsSseKms">gcs_sse_kms</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference">StageExternalGcsEncryptionGcsSseKmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.none">none</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference">StageExternalGcsEncryptionNoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.gcsSseKmsInput">gcs_sse_kms_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.noneInput">none_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_sse_kms`<sup>Required</sup> <a name="gcs_sse_kms" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.gcsSseKms"></a>

```python
gcs_sse_kms: StageExternalGcsEncryptionGcsSseKmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKmsOutputReference">StageExternalGcsEncryptionGcsSseKmsOutputReference</a>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.none"></a>

```python
none: StageExternalGcsEncryptionNoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNoneOutputReference">StageExternalGcsEncryptionNoneOutputReference</a>

---

##### `gcs_sse_kms_input`<sup>Optional</sup> <a name="gcs_sse_kms_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.gcsSseKmsInput"></a>

```python
gcs_sse_kms_input: StageExternalGcsEncryptionGcsSseKms
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionGcsSseKms">StageExternalGcsEncryptionGcsSseKms</a>

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.noneInput"></a>

```python
none_input: StageExternalGcsEncryptionNone
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionNone">StageExternalGcsEncryptionNone</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsEncryption
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsEncryption">StageExternalGcsEncryption</a>

---


### StageExternalGcsFileFormatAvroOutputReference <a name="StageExternalGcsFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a>

---


### StageExternalGcsFileFormatCsvOutputReference <a name="StageExternalGcsFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEmptyFieldAsNull">reset_empty_field_as_null</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch">reset_error_on_column_count_mismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEscape">reset_escape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEscapeUnenclosedField">reset_escape_unenclosed_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy">reset_field_optionally_enclosed_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetMultiLine">reset_multi_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetParseHeader">reset_parse_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetRecordDelimiter">reset_record_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipBlankLines">reset_skip_blank_lines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipHeader">reset_skip_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_empty_field_as_null` <a name="reset_empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEmptyFieldAsNull"></a>

```python
def reset_empty_field_as_null() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_error_on_column_count_mismatch` <a name="reset_error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch"></a>

```python
def reset_error_on_column_count_mismatch() -> None
```

##### `reset_escape` <a name="reset_escape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEscape"></a>

```python
def reset_escape() -> None
```

##### `reset_escape_unenclosed_field` <a name="reset_escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetEscapeUnenclosedField"></a>

```python
def reset_escape_unenclosed_field() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_field_optionally_enclosed_by` <a name="reset_field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy"></a>

```python
def reset_field_optionally_enclosed_by() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_parse_header` <a name="reset_parse_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetParseHeader"></a>

```python
def reset_parse_header() -> None
```

##### `reset_record_delimiter` <a name="reset_record_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetRecordDelimiter"></a>

```python
def reset_record_delimiter() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_blank_lines` <a name="reset_skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipBlankLines"></a>

```python
def reset_skip_blank_lines() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_skip_header` <a name="reset_skip_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetSkipHeader"></a>

```python
def reset_skip_header() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.emptyFieldAsNullInput">empty_field_as_null_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput">error_on_column_count_mismatch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeInput">escape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput">escape_unenclosed_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput">field_optionally_enclosed_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.multiLineInput">multi_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.parseHeaderInput">parse_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.recordDelimiterInput">record_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipBlankLinesInput">skip_blank_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipHeaderInput">skip_header_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.multiLine">multi_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.parseHeader">parse_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `empty_field_as_null_input`<sup>Optional</sup> <a name="empty_field_as_null_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.emptyFieldAsNullInput"></a>

```python
empty_field_as_null_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch_input`<sup>Optional</sup> <a name="error_on_column_count_mismatch_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput"></a>

```python
error_on_column_count_mismatch_input: str
```

- *Type:* str

---

##### `escape_input`<sup>Optional</sup> <a name="escape_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeInput"></a>

```python
escape_input: str
```

- *Type:* str

---

##### `escape_unenclosed_field_input`<sup>Optional</sup> <a name="escape_unenclosed_field_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput"></a>

```python
escape_unenclosed_field_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by_input`<sup>Optional</sup> <a name="field_optionally_enclosed_by_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput"></a>

```python
field_optionally_enclosed_by_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.multiLineInput"></a>

```python
multi_line_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header_input`<sup>Optional</sup> <a name="parse_header_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.parseHeaderInput"></a>

```python
parse_header_input: str
```

- *Type:* str

---

##### `record_delimiter_input`<sup>Optional</sup> <a name="record_delimiter_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.recordDelimiterInput"></a>

```python
record_delimiter_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_blank_lines_input`<sup>Optional</sup> <a name="skip_blank_lines_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipBlankLinesInput"></a>

```python
skip_blank_lines_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `skip_header_input`<sup>Optional</sup> <a name="skip_header_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipHeaderInput"></a>

```python
skip_header_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: str
```

- *Type:* str

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.parseHeader"></a>

```python
parse_header: str
```

- *Type:* str

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipBlankLines"></a>

```python
skip_blank_lines: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a>

---


### StageExternalGcsFileFormatJsonOutputReference <a name="StageExternalGcsFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetAllowDuplicate">reset_allow_duplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetEnableOctal">reset_enable_octal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetIgnoreUtf8Errors">reset_ignore_utf8_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetMultiLine">reset_multi_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetStripNullValues">reset_strip_null_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetStripOuterArray">reset_strip_outer_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_duplicate` <a name="reset_allow_duplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetAllowDuplicate"></a>

```python
def reset_allow_duplicate() -> None
```

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_enable_octal` <a name="reset_enable_octal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetEnableOctal"></a>

```python
def reset_enable_octal() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_ignore_utf8_errors` <a name="reset_ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetIgnoreUtf8Errors"></a>

```python
def reset_ignore_utf8_errors() -> None
```

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_strip_null_values` <a name="reset_strip_null_values" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetStripNullValues"></a>

```python
def reset_strip_null_values() -> None
```

##### `reset_strip_outer_array` <a name="reset_strip_outer_array" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetStripOuterArray"></a>

```python
def reset_strip_outer_array() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.allowDuplicateInput">allow_duplicate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.enableOctalInput">enable_octal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput">ignore_utf8_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.multiLineInput">multi_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripNullValuesInput">strip_null_values_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripOuterArrayInput">strip_outer_array_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.enableOctal">enable_octal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.multiLine">multi_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripNullValues">strip_null_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_duplicate_input`<sup>Optional</sup> <a name="allow_duplicate_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.allowDuplicateInput"></a>

```python
allow_duplicate_input: str
```

- *Type:* str

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `enable_octal_input`<sup>Optional</sup> <a name="enable_octal_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.enableOctalInput"></a>

```python
enable_octal_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `ignore_utf8_errors_input`<sup>Optional</sup> <a name="ignore_utf8_errors_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput"></a>

```python
ignore_utf8_errors_input: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.multiLineInput"></a>

```python
multi_line_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `strip_null_values_input`<sup>Optional</sup> <a name="strip_null_values_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripNullValuesInput"></a>

```python
strip_null_values_input: str
```

- *Type:* str

---

##### `strip_outer_array_input`<sup>Optional</sup> <a name="strip_outer_array_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripOuterArrayInput"></a>

```python
strip_outer_array_input: str
```

- *Type:* str

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.allowDuplicate"></a>

```python
allow_duplicate: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.enableOctal"></a>

```python
enable_octal: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripNullValues"></a>

```python
strip_null_values: str
```

- *Type:* str

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.stripOuterArray"></a>

```python
strip_outer_array: str
```

- *Type:* str

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a>

---


### StageExternalGcsFileFormatOrcOutputReference <a name="StageExternalGcsFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a>

---


### StageExternalGcsFileFormatOutputReference <a name="StageExternalGcsFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro">put_avro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putOrc">put_orc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet">put_parquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml">put_xml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetAvro">reset_avro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetCsv">reset_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetFormatName">reset_format_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetOrc">reset_orc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetParquet">reset_parquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetXml">reset_xml</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro` <a name="put_avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro"></a>

```python
def put_avro(
  compression: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
) -> None
```

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro.parameter.compression"></a>

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putAvro.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

##### `put_csv` <a name="put_csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv"></a>

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

###### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#binary_format StageExternalGcs#binary_format}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

###### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#date_format StageExternalGcs#date_format}

---

###### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.emptyFieldAsNull"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#empty_field_as_null StageExternalGcs#empty_field_as_null}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.encoding"></a>

- *Type:* str

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#encoding StageExternalGcs#encoding}

---

###### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.errorOnColumnCountMismatch"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#error_on_column_count_mismatch StageExternalGcs#error_on_column_count_mismatch}

---

###### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.escape"></a>

- *Type:* str

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#escape StageExternalGcs#escape}

---

###### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.escapeUnenclosedField"></a>

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#escape_unenclosed_field StageExternalGcs#escape_unenclosed_field}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.fieldDelimiter"></a>

- *Type:* str

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#field_delimiter StageExternalGcs#field_delimiter}

---

###### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.fieldOptionallyEnclosedBy"></a>

- *Type:* str

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#field_optionally_enclosed_by StageExternalGcs#field_optionally_enclosed_by}

---

###### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#file_extension StageExternalGcs#file_extension}

---

###### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.multiLine"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#multi_line StageExternalGcs#multi_line}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

###### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.parseHeader"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#parse_header StageExternalGcs#parse_header}

---

###### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.recordDelimiter"></a>

- *Type:* str

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#record_delimiter StageExternalGcs#record_delimiter}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

###### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.skipBlankLines"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_blank_lines StageExternalGcs#skip_blank_lines}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

###### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.skipHeader"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_header StageExternalGcs#skip_header}

---

###### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#time_format StageExternalGcs#time_format}

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#timestamp_format StageExternalGcs#timestamp_format}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putCsv.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

##### `put_json` <a name="put_json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson"></a>

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

###### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.allowDuplicate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#allow_duplicate StageExternalGcs#allow_duplicate}

---

###### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#binary_format StageExternalGcs#binary_format}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

###### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#date_format StageExternalGcs#date_format}

---

###### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.enableOctal"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#enable_octal StageExternalGcs#enable_octal}

---

###### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#file_extension StageExternalGcs#file_extension}

---

###### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.ignoreUtf8Errors"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#ignore_utf8_errors StageExternalGcs#ignore_utf8_errors}

---

###### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.multiLine"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#multi_line StageExternalGcs#multi_line}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

###### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.stripNullValues"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#strip_null_values StageExternalGcs#strip_null_values}

---

###### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.stripOuterArray"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#strip_outer_array StageExternalGcs#strip_outer_array}

---

###### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#time_format StageExternalGcs#time_format}

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#timestamp_format StageExternalGcs#timestamp_format}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putJson.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

##### `put_orc` <a name="put_orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putOrc"></a>

```python
def put_orc(
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
) -> None
```

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putOrc.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putOrc.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putOrc.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

##### `put_parquet` <a name="put_parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet"></a>

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

###### `binary_as_text`<sup>Optional</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet.parameter.binaryAsText"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#binary_as_text StageExternalGcs#binary_as_text}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet.parameter.compression"></a>

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}

---

###### `use_logical_type`<sup>Optional</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet.parameter.useLogicalType"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#use_logical_type StageExternalGcs#use_logical_type}

---

###### `use_vectorized_scanner`<sup>Optional</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putParquet.parameter.useVectorizedScanner"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#use_vectorized_scanner StageExternalGcs#use_vectorized_scanner}

---

##### `put_xml` <a name="put_xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml"></a>

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

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}

---

###### `disable_auto_convert`<sup>Optional</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml.parameter.disableAutoConvert"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#disable_auto_convert StageExternalGcs#disable_auto_convert}

---

###### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml.parameter.ignoreUtf8Errors"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#ignore_utf8_errors StageExternalGcs#ignore_utf8_errors}

---

###### `preserve_space`<sup>Optional</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml.parameter.preserveSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#preserve_space StageExternalGcs#preserve_space}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}

---

###### `strip_outer_element`<sup>Optional</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.putXml.parameter.stripOuterElement"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_gcs#strip_outer_element StageExternalGcs#strip_outer_element}

---

##### `reset_avro` <a name="reset_avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetAvro"></a>

```python
def reset_avro() -> None
```

##### `reset_csv` <a name="reset_csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```

##### `reset_format_name` <a name="reset_format_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetFormatName"></a>

```python
def reset_format_name() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_orc` <a name="reset_orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetOrc"></a>

```python
def reset_orc() -> None
```

##### `reset_parquet` <a name="reset_parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetParquet"></a>

```python
def reset_parquet() -> None
```

##### `reset_xml` <a name="reset_xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.resetXml"></a>

```python
def reset_xml() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference">StageExternalGcsFileFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference">StageExternalGcsFileFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference">StageExternalGcsFileFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference">StageExternalGcsFileFormatOrcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference">StageExternalGcsFileFormatParquetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference">StageExternalGcsFileFormatXmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.avroInput">avro_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.csvInput">csv_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.formatNameInput">format_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.orcInput">orc_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.parquetInput">parquet_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.xmlInput">xml_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.formatName">format_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.avro"></a>

```python
avro: StageExternalGcsFileFormatAvroOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvroOutputReference">StageExternalGcsFileFormatAvroOutputReference</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.csv"></a>

```python
csv: StageExternalGcsFileFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsvOutputReference">StageExternalGcsFileFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.json"></a>

```python
json: StageExternalGcsFileFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJsonOutputReference">StageExternalGcsFileFormatJsonOutputReference</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.orc"></a>

```python
orc: StageExternalGcsFileFormatOrcOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrcOutputReference">StageExternalGcsFileFormatOrcOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.parquet"></a>

```python
parquet: StageExternalGcsFileFormatParquetOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference">StageExternalGcsFileFormatParquetOutputReference</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.xml"></a>

```python
xml: StageExternalGcsFileFormatXmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference">StageExternalGcsFileFormatXmlOutputReference</a>

---

##### `avro_input`<sup>Optional</sup> <a name="avro_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.avroInput"></a>

```python
avro_input: StageExternalGcsFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatAvro">StageExternalGcsFileFormatAvro</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.csvInput"></a>

```python
csv_input: StageExternalGcsFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatCsv">StageExternalGcsFileFormatCsv</a>

---

##### `format_name_input`<sup>Optional</sup> <a name="format_name_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.formatNameInput"></a>

```python
format_name_input: str
```

- *Type:* str

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.jsonInput"></a>

```python
json_input: StageExternalGcsFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatJson">StageExternalGcsFileFormatJson</a>

---

##### `orc_input`<sup>Optional</sup> <a name="orc_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.orcInput"></a>

```python
orc_input: StageExternalGcsFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOrc">StageExternalGcsFileFormatOrc</a>

---

##### `parquet_input`<sup>Optional</sup> <a name="parquet_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.parquetInput"></a>

```python
parquet_input: StageExternalGcsFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a>

---

##### `xml_input`<sup>Optional</sup> <a name="xml_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.xmlInput"></a>

```python
xml_input: StageExternalGcsFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a>

---

##### `format_name`<sup>Required</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormat">StageExternalGcsFileFormat</a>

---


### StageExternalGcsFileFormatParquetOutputReference <a name="StageExternalGcsFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetBinaryAsText">reset_binary_as_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetUseLogicalType">reset_use_logical_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetUseVectorizedScanner">reset_use_vectorized_scanner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_as_text` <a name="reset_binary_as_text" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetBinaryAsText"></a>

```python
def reset_binary_as_text() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```

##### `reset_use_logical_type` <a name="reset_use_logical_type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetUseLogicalType"></a>

```python
def reset_use_logical_type() -> None
```

##### `reset_use_vectorized_scanner` <a name="reset_use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.resetUseVectorizedScanner"></a>

```python
def reset_use_vectorized_scanner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.binaryAsTextInput">binary_as_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useLogicalTypeInput">use_logical_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useVectorizedScannerInput">use_vectorized_scanner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.binaryAsText">binary_as_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useLogicalType">use_logical_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_as_text_input`<sup>Optional</sup> <a name="binary_as_text_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.binaryAsTextInput"></a>

```python
binary_as_text_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `use_logical_type_input`<sup>Optional</sup> <a name="use_logical_type_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useLogicalTypeInput"></a>

```python
use_logical_type_input: str
```

- *Type:* str

---

##### `use_vectorized_scanner_input`<sup>Optional</sup> <a name="use_vectorized_scanner_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useVectorizedScannerInput"></a>

```python
use_vectorized_scanner_input: str
```

- *Type:* str

---

##### `binary_as_text`<sup>Required</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.binaryAsText"></a>

```python
binary_as_text: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `use_logical_type`<sup>Required</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useLogicalType"></a>

```python
use_logical_type: str
```

- *Type:* str

---

##### `use_vectorized_scanner`<sup>Required</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquetOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatParquet">StageExternalGcsFileFormatParquet</a>

---


### StageExternalGcsFileFormatXmlOutputReference <a name="StageExternalGcsFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetDisableAutoConvert">reset_disable_auto_convert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetIgnoreUtf8Errors">reset_ignore_utf8_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetPreserveSpace">reset_preserve_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetStripOuterElement">reset_strip_outer_element</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_disable_auto_convert` <a name="reset_disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetDisableAutoConvert"></a>

```python
def reset_disable_auto_convert() -> None
```

##### `reset_ignore_utf8_errors` <a name="reset_ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetIgnoreUtf8Errors"></a>

```python
def reset_ignore_utf8_errors() -> None
```

##### `reset_preserve_space` <a name="reset_preserve_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetPreserveSpace"></a>

```python
def reset_preserve_space() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_strip_outer_element` <a name="reset_strip_outer_element" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.resetStripOuterElement"></a>

```python
def reset_strip_outer_element() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.disableAutoConvertInput">disable_auto_convert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput">ignore_utf8_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.preserveSpaceInput">preserve_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.stripOuterElementInput">strip_outer_element_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.disableAutoConvert">disable_auto_convert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.preserveSpace">preserve_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.stripOuterElement">strip_outer_element</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `disable_auto_convert_input`<sup>Optional</sup> <a name="disable_auto_convert_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.disableAutoConvertInput"></a>

```python
disable_auto_convert_input: str
```

- *Type:* str

---

##### `ignore_utf8_errors_input`<sup>Optional</sup> <a name="ignore_utf8_errors_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput"></a>

```python
ignore_utf8_errors_input: str
```

- *Type:* str

---

##### `preserve_space_input`<sup>Optional</sup> <a name="preserve_space_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.preserveSpaceInput"></a>

```python
preserve_space_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `strip_outer_element_input`<sup>Optional</sup> <a name="strip_outer_element_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.stripOuterElementInput"></a>

```python
strip_outer_element_input: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `disable_auto_convert`<sup>Required</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```python
disable_auto_convert: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

---

##### `preserve_space`<sup>Required</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.preserveSpace"></a>

```python
preserve_space: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `strip_outer_element`<sup>Required</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.stripOuterElement"></a>

```python
strip_outer_element: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXmlOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsFileFormatXml">StageExternalGcsFileFormatXml</a>

---


### StageExternalGcsShowOutputList <a name="StageExternalGcsShowOutputList" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalGcsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalGcsShowOutputOutputReference <a name="StageExternalGcsShowOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.directoryEnabled">directory_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.hasCredentials">has_credentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.hasEncryptionKey">has_encryption_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.storageIntegration">storage_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutput">StageExternalGcsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `directory_enabled`<sup>Required</sup> <a name="directory_enabled" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.directoryEnabled"></a>

```python
directory_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `has_credentials`<sup>Required</sup> <a name="has_credentials" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.hasCredentials"></a>

```python
has_credentials: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `has_encryption_key`<sup>Required</sup> <a name="has_encryption_key" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.hasEncryptionKey"></a>

```python
has_encryption_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalGcsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsShowOutput">StageExternalGcsShowOutput</a>

---


### StageExternalGcsTimeoutsOutputReference <a name="StageExternalGcsTimeoutsOutputReference" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_gcs

stageExternalGcs.StageExternalGcsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StageExternalGcsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalGcs.StageExternalGcsTimeouts">StageExternalGcsTimeouts</a>

---



