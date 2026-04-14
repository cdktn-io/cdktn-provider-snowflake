# `stageExternalS3Compatible` Submodule <a name="`stageExternalS3Compatible` Submodule" id="@cdktn/provider-snowflake.stageExternalS3Compatible"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageExternalS3Compatible <a name="StageExternalS3Compatible" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible snowflake_stage_external_s3_compatible}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3Compatible(
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
  endpoint: str,
  name: str,
  schema: str,
  url: str,
  comment: str = None,
  credentials: StageExternalS3CompatibleCredentials = None,
  directory: StageExternalS3CompatibleDirectory = None,
  file_format: StageExternalS3CompatibleFileFormat = None,
  id: str = None,
  timeouts: StageExternalS3CompatibleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Specifies the endpoint for the S3-compatible storage provider. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.url">url</a></code> | <code>str</code> | Specifies the URL for the S3-compatible storage location (e.g., 's3compat://bucket/path/'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | credentials block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#id StageExternalS3Compatible#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#database StageExternalS3Compatible#database}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.endpoint"></a>

- *Type:* str

Specifies the endpoint for the S3-compatible storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#endpoint StageExternalS3Compatible#endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#name StageExternalS3Compatible#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#schema StageExternalS3Compatible#schema}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.url"></a>

- *Type:* str

Specifies the URL for the S3-compatible storage location (e.g., 's3compat://bucket/path/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#url StageExternalS3Compatible#url}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#comment StageExternalS3Compatible#comment}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.credentials"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#credentials StageExternalS3Compatible#credentials}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.directory"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#directory StageExternalS3Compatible#directory}

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.fileFormat"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#file_format StageExternalS3Compatible#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#id StageExternalS3Compatible#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#timeouts StageExternalS3Compatible#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory">put_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat">put_file_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetFileFormat">reset_file_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credentials` <a name="put_credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials"></a>

```python
def put_credentials(
  aws_key_id: str,
  aws_secret_key: str
) -> None
```

###### `aws_key_id`<sup>Required</sup> <a name="aws_key_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials.parameter.awsKeyId"></a>

- *Type:* str

Specifies the AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#aws_key_id StageExternalS3Compatible#aws_key_id}

---

###### `aws_secret_key`<sup>Required</sup> <a name="aws_secret_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putCredentials.parameter.awsSecretKey"></a>

- *Type:* str

Specifies the AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#aws_secret_key StageExternalS3Compatible#aws_secret_key}

---

##### `put_directory` <a name="put_directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory"></a>

```python
def put_directory(
  enable: bool | IResolvable,
  auto_refresh: str = None,
  refresh_on_create: str = None
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#enable StageExternalS3Compatible#enable}

---

###### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory.parameter.autoRefresh"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#auto_refresh StageExternalS3Compatible#auto_refresh}

---

###### `refresh_on_create`<sup>Optional</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putDirectory.parameter.refreshOnCreate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#refresh_on_create StageExternalS3Compatible#refresh_on_create}

---

##### `put_file_format` <a name="put_file_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat"></a>

```python
def put_file_format(
  avro: StageExternalS3CompatibleFileFormatAvro = None,
  csv: StageExternalS3CompatibleFileFormatCsv = None,
  format_name: str = None,
  json: StageExternalS3CompatibleFileFormatJson = None,
  orc: StageExternalS3CompatibleFileFormatOrc = None,
  parquet: StageExternalS3CompatibleFileFormatParquet = None,
  xml: StageExternalS3CompatibleFileFormatXml = None
) -> None
```

###### `avro`<sup>Optional</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.avro"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#avro StageExternalS3Compatible#avro}

---

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.csv"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#csv StageExternalS3Compatible#csv}

---

###### `format_name`<sup>Optional</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.formatName"></a>

- *Type:* str

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#format_name StageExternalS3Compatible#format_name}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.json"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#json StageExternalS3Compatible#json}

---

###### `orc`<sup>Optional</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.orc"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#orc StageExternalS3Compatible#orc}

---

###### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.parquet"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#parquet StageExternalS3Compatible#parquet}

---

###### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putFileFormat.parameter.xml"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#xml StageExternalS3Compatible#xml}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#create StageExternalS3Compatible#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#delete StageExternalS3Compatible#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#read StageExternalS3Compatible#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#update StageExternalS3Compatible#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_directory` <a name="reset_directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_file_format` <a name="reset_file_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetFileFormat"></a>

```python
def reset_file_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StageExternalS3Compatible resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isConstruct"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3Compatible.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3Compatible.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3Compatible.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3Compatible.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StageExternalS3Compatible resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StageExternalS3Compatible to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StageExternalS3Compatible that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StageExternalS3Compatible to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference">StageExternalS3CompatibleCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList">StageExternalS3CompatibleDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference">StageExternalS3CompatibleDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference">StageExternalS3CompatibleFileFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList">StageExternalS3CompatibleShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.stageType">stage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference">StageExternalS3CompatibleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentialsInput">credentials_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directoryInput">directory_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormatInput">file_format_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentials"></a>

```python
credentials: StageExternalS3CompatibleCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference">StageExternalS3CompatibleCredentialsOutputReference</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.describeOutput"></a>

```python
describe_output: StageExternalS3CompatibleDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList">StageExternalS3CompatibleDescribeOutputList</a>

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directory"></a>

```python
directory: StageExternalS3CompatibleDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference">StageExternalS3CompatibleDirectoryOutputReference</a>

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormat"></a>

```python
file_format: StageExternalS3CompatibleFileFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference">StageExternalS3CompatibleFileFormatOutputReference</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.showOutput"></a>

```python
show_output: StageExternalS3CompatibleShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList">StageExternalS3CompatibleShowOutputList</a>

---

##### `stage_type`<sup>Required</sup> <a name="stage_type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.stageType"></a>

```python
stage_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeouts"></a>

```python
timeouts: StageExternalS3CompatibleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference">StageExternalS3CompatibleTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.credentialsInput"></a>

```python
credentials_input: StageExternalS3CompatibleCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.directoryInput"></a>

```python
directory_input: StageExternalS3CompatibleDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.fileFormatInput"></a>

```python
file_format_input: StageExternalS3CompatibleFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StageExternalS3CompatibleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3Compatible.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StageExternalS3CompatibleConfig <a name="StageExternalS3CompatibleConfig" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  endpoint: str,
  name: str,
  schema: str,
  url: str,
  comment: str = None,
  credentials: StageExternalS3CompatibleCredentials = None,
  directory: StageExternalS3CompatibleDirectory = None,
  file_format: StageExternalS3CompatibleFileFormat = None,
  id: str = None,
  timeouts: StageExternalS3CompatibleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Specifies the endpoint for the S3-compatible storage provider. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.url">url</a></code> | <code>str</code> | Specifies the URL for the S3-compatible storage location (e.g., 's3compat://bucket/path/'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | credentials block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#id StageExternalS3Compatible#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#database StageExternalS3Compatible#database}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Specifies the endpoint for the S3-compatible storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#endpoint StageExternalS3Compatible#endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#name StageExternalS3Compatible#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#schema StageExternalS3Compatible#schema}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Specifies the URL for the S3-compatible storage location (e.g., 's3compat://bucket/path/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#url StageExternalS3Compatible#url}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#comment StageExternalS3Compatible#comment}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.credentials"></a>

```python
credentials: StageExternalS3CompatibleCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#credentials StageExternalS3Compatible#credentials}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.directory"></a>

```python
directory: StageExternalS3CompatibleDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#directory StageExternalS3Compatible#directory}

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.fileFormat"></a>

```python
file_format: StageExternalS3CompatibleFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#file_format StageExternalS3Compatible#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#id StageExternalS3Compatible#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleConfig.property.timeouts"></a>

```python
timeouts: StageExternalS3CompatibleTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#timeouts StageExternalS3Compatible#timeouts}

---

### StageExternalS3CompatibleCredentials <a name="StageExternalS3CompatibleCredentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleCredentials(
  aws_key_id: str,
  aws_secret_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsKeyId">aws_key_id</a></code> | <code>str</code> | Specifies the AWS access key ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsSecretKey">aws_secret_key</a></code> | <code>str</code> | Specifies the AWS secret access key. |

---

##### `aws_key_id`<sup>Required</sup> <a name="aws_key_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsKeyId"></a>

```python
aws_key_id: str
```

- *Type:* str

Specifies the AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#aws_key_id StageExternalS3Compatible#aws_key_id}

---

##### `aws_secret_key`<sup>Required</sup> <a name="aws_secret_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials.property.awsSecretKey"></a>

```python
aws_secret_key: str
```

- *Type:* str

Specifies the AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#aws_secret_key StageExternalS3Compatible#aws_secret_key}

---

### StageExternalS3CompatibleDescribeOutput <a name="StageExternalS3CompatibleDescribeOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput()
```


### StageExternalS3CompatibleDescribeOutputDirectoryTable <a name="StageExternalS3CompatibleDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable()
```


### StageExternalS3CompatibleDescribeOutputFileFormat <a name="StageExternalS3CompatibleDescribeOutputFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat()
```


### StageExternalS3CompatibleDescribeOutputFileFormatAvro <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro()
```


### StageExternalS3CompatibleDescribeOutputFileFormatCsv <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv()
```


### StageExternalS3CompatibleDescribeOutputFileFormatJson <a name="StageExternalS3CompatibleDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson()
```


### StageExternalS3CompatibleDescribeOutputFileFormatOrc <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc()
```


### StageExternalS3CompatibleDescribeOutputFileFormatParquet <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet()
```


### StageExternalS3CompatibleDescribeOutputFileFormatXml <a name="StageExternalS3CompatibleDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml()
```


### StageExternalS3CompatibleDescribeOutputLocation <a name="StageExternalS3CompatibleDescribeOutputLocation" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation()
```


### StageExternalS3CompatibleDirectory <a name="StageExternalS3CompatibleDirectory" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDirectory(
  enable: bool | IResolvable,
  auto_refresh: str = None,
  refresh_on_create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable a directory table on the external stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.refreshOnCreate">refresh_on_create</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#enable StageExternalS3Compatible#enable}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#auto_refresh StageExternalS3Compatible#auto_refresh}

---

##### `refresh_on_create`<sup>Optional</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory.property.refreshOnCreate"></a>

```python
refresh_on_create: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#refresh_on_create StageExternalS3Compatible#refresh_on_create}

---

### StageExternalS3CompatibleFileFormat <a name="StageExternalS3CompatibleFileFormat" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormat(
  avro: StageExternalS3CompatibleFileFormatAvro = None,
  csv: StageExternalS3CompatibleFileFormatCsv = None,
  format_name: str = None,
  json: StageExternalS3CompatibleFileFormatJson = None,
  orc: StageExternalS3CompatibleFileFormatOrc = None,
  parquet: StageExternalS3CompatibleFileFormatParquet = None,
  xml: StageExternalS3CompatibleFileFormatXml = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.formatName">format_name</a></code> | <code>str</code> | Fully qualified name of the file format (e.g., 'database.schema.format_name'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | json block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | orc block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | parquet block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | xml block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.avro"></a>

```python
avro: StageExternalS3CompatibleFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#avro StageExternalS3Compatible#avro}

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.csv"></a>

```python
csv: StageExternalS3CompatibleFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#csv StageExternalS3Compatible#csv}

---

##### `format_name`<sup>Optional</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#format_name StageExternalS3Compatible#format_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.json"></a>

```python
json: StageExternalS3CompatibleFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#json StageExternalS3Compatible#json}

---

##### `orc`<sup>Optional</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.orc"></a>

```python
orc: StageExternalS3CompatibleFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#orc StageExternalS3Compatible#orc}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.parquet"></a>

```python
parquet: StageExternalS3CompatibleFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#parquet StageExternalS3Compatible#parquet}

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat.property.xml"></a>

```python
xml: StageExternalS3CompatibleFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#xml StageExternalS3Compatible#xml}

---

### StageExternalS3CompatibleFileFormatAvro <a name="StageExternalS3CompatibleFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro(
  compression: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. Valid values: `AUTO` \| `GZIP` \| `BROTLI` \| `ZSTD` \| `DEFLATE` \| `RAW_DEFLATE` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatCsv <a name="StageExternalS3CompatibleFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv(
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.encoding">encoding</a></code> | <code>str</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escape">escape</a></code> | <code>str</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.parseHeader">parse_header</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#binary_format StageExternalS3Compatible#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#date_format StageExternalS3Compatible#date_format}

---

##### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#empty_field_as_null StageExternalS3Compatible#empty_field_as_null}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#encoding StageExternalS3Compatible#encoding}

---

##### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#error_on_column_count_mismatch StageExternalS3Compatible#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escape"></a>

```python
escape: str
```

- *Type:* str

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#escape StageExternalS3Compatible#escape}

---

##### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#escape_unenclosed_field StageExternalS3Compatible#escape_unenclosed_field}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#field_delimiter StageExternalS3Compatible#field_delimiter}

---

##### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#field_optionally_enclosed_by StageExternalS3Compatible#field_optionally_enclosed_by}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#file_extension StageExternalS3Compatible#file_extension}

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#multi_line StageExternalS3Compatible#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.parseHeader"></a>

```python
parse_header: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#parse_header StageExternalS3Compatible#parse_header}

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#record_delimiter StageExternalS3Compatible#record_delimiter}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipBlankLines"></a>

```python
skip_blank_lines: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_blank_lines StageExternalS3Compatible#skip_blank_lines}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_header StageExternalS3Compatible#skip_header}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#time_format StageExternalS3Compatible#time_format}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#timestamp_format StageExternalS3Compatible#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatJson <a name="StageExternalS3CompatibleFileFormatJson" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson(
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.enableOctal">enable_octal</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripNullValues">strip_null_values</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.allowDuplicate"></a>

```python
allow_duplicate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#allow_duplicate StageExternalS3Compatible#allow_duplicate}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#binary_format StageExternalS3Compatible#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#date_format StageExternalS3Compatible#date_format}

---

##### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.enableOctal"></a>

```python
enable_octal: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#enable_octal StageExternalS3Compatible#enable_octal}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#file_extension StageExternalS3Compatible#file_extension}

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#ignore_utf8_errors StageExternalS3Compatible#ignore_utf8_errors}

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#multi_line StageExternalS3Compatible#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripNullValues"></a>

```python
strip_null_values: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#strip_null_values StageExternalS3Compatible#strip_null_values}

---

##### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.stripOuterArray"></a>

```python
strip_outer_array: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#strip_outer_array StageExternalS3Compatible#strip_outer_array}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#time_format StageExternalS3Compatible#time_format}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#timestamp_format StageExternalS3Compatible#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatOrc <a name="StageExternalS3CompatibleFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc(
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

### StageExternalS3CompatibleFileFormatParquet <a name="StageExternalS3CompatibleFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet(
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.binaryAsText">binary_as_text</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. Valid values: `AUTO` \| `LZO` \| `SNAPPY` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useLogicalType">use_logical_type</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. |

---

##### `binary_as_text`<sup>Optional</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.binaryAsText"></a>

```python
binary_as_text: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#binary_as_text StageExternalS3Compatible#binary_as_text}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

##### `use_logical_type`<sup>Optional</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useLogicalType"></a>

```python
use_logical_type: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#use_logical_type StageExternalS3Compatible#use_logical_type}

---

##### `use_vectorized_scanner`<sup>Optional</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#use_vectorized_scanner StageExternalS3Compatible#use_vectorized_scanner}

---

### StageExternalS3CompatibleFileFormatXml <a name="StageExternalS3CompatibleFileFormatXml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml(
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
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.disableAutoConvert">disable_auto_convert</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.preserveSpace">preserve_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.stripOuterElement">strip_outer_element</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

##### `disable_auto_convert`<sup>Optional</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.disableAutoConvert"></a>

```python
disable_auto_convert: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#disable_auto_convert StageExternalS3Compatible#disable_auto_convert}

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#ignore_utf8_errors StageExternalS3Compatible#ignore_utf8_errors}

---

##### `preserve_space`<sup>Optional</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.preserveSpace"></a>

```python
preserve_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#preserve_space StageExternalS3Compatible#preserve_space}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

##### `strip_outer_element`<sup>Optional</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml.property.stripOuterElement"></a>

```python
strip_outer_element: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#strip_outer_element StageExternalS3Compatible#strip_outer_element}

---

### StageExternalS3CompatibleShowOutput <a name="StageExternalS3CompatibleShowOutput" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleShowOutput()
```


### StageExternalS3CompatibleTimeouts <a name="StageExternalS3CompatibleTimeouts" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#create StageExternalS3Compatible#create}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#delete StageExternalS3Compatible#delete}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#read StageExternalS3Compatible#read}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#update StageExternalS3Compatible#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#create StageExternalS3Compatible#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#delete StageExternalS3Compatible#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#read StageExternalS3Compatible#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#update StageExternalS3Compatible#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StageExternalS3CompatibleCredentialsOutputReference <a name="StageExternalS3CompatibleCredentialsOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyIdInput">aws_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKeyInput">aws_secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyId">aws_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKey">aws_secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_key_id_input`<sup>Optional</sup> <a name="aws_key_id_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyIdInput"></a>

```python
aws_key_id_input: str
```

- *Type:* str

---

##### `aws_secret_key_input`<sup>Optional</sup> <a name="aws_secret_key_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKeyInput"></a>

```python
aws_secret_key_input: str
```

- *Type:* str

---

##### `aws_key_id`<sup>Required</sup> <a name="aws_key_id" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsKeyId"></a>

```python
aws_key_id: str
```

- *Type:* str

---

##### `aws_secret_key`<sup>Required</sup> <a name="aws_secret_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.awsSecretKey"></a>

```python
aws_secret_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleCredentials
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleCredentials">StageExternalS3CompatibleCredentials</a>

---


### StageExternalS3CompatibleDescribeOutputDirectoryTableList <a name="StageExternalS3CompatibleDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference <a name="StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.autoRefresh">auto_refresh</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.lastRefreshedOn">last_refreshed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable">StageExternalS3CompatibleDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```python
auto_refresh: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```python
enable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_refreshed_on`<sup>Required</sup> <a name="last_refreshed_on" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.lastRefreshedOn"></a>

```python
last_refreshed_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputDirectoryTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTable">StageExternalS3CompatibleDescribeOutputDirectoryTable</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatAvroList <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro">StageExternalS3CompatibleDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvro">StageExternalS3CompatibleDescribeOutputFileFormatAvro</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatCsvList <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.parseHeader">parse_header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">skip_blank_lines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">validate_utf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv">StageExternalS3CompatibleDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```python
parse_header: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```python
skip_blank_lines: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate_utf8`<sup>Required</sup> <a name="validate_utf8" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```python
validate_utf8: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsv">StageExternalS3CompatibleDescribeOutputFileFormatCsv</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatJsonList <a name="StageExternalS3CompatibleDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">allow_duplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.enableOctal">enable_octal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">strip_null_values</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">strip_outer_array</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson">StageExternalS3CompatibleDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```python
allow_duplicate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```python
enable_octal: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```python
strip_null_values: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```python
strip_outer_array: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJson">StageExternalS3CompatibleDescribeOutputFileFormatJson</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatList <a name="StageExternalS3CompatibleDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputFileFormatOrcList <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc">StageExternalS3CompatibleDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrc">StageExternalS3CompatibleDescribeOutputFileFormatOrc</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList">StageExternalS3CompatibleDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList">StageExternalS3CompatibleDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.formatName">format_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList">StageExternalS3CompatibleDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList">StageExternalS3CompatibleDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList">StageExternalS3CompatibleDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList">StageExternalS3CompatibleDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat">StageExternalS3CompatibleDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.avro"></a>

```python
avro: StageExternalS3CompatibleDescribeOutputFileFormatAvroList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatAvroList">StageExternalS3CompatibleDescribeOutputFileFormatAvroList</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.csv"></a>

```python
csv: StageExternalS3CompatibleDescribeOutputFileFormatCsvList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatCsvList">StageExternalS3CompatibleDescribeOutputFileFormatCsvList</a>

---

##### `format_name`<sup>Required</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.json"></a>

```python
json: StageExternalS3CompatibleDescribeOutputFileFormatJsonList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatJsonList">StageExternalS3CompatibleDescribeOutputFileFormatJsonList</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.orc"></a>

```python
orc: StageExternalS3CompatibleDescribeOutputFileFormatOrcList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOrcList">StageExternalS3CompatibleDescribeOutputFileFormatOrcList</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.parquet"></a>

```python
parquet: StageExternalS3CompatibleDescribeOutputFileFormatParquetList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList">StageExternalS3CompatibleDescribeOutputFileFormatParquetList</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.xml"></a>

```python
xml: StageExternalS3CompatibleDescribeOutputFileFormatXmlList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList">StageExternalS3CompatibleDescribeOutputFileFormatXmlList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormat">StageExternalS3CompatibleDescribeOutputFileFormat</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatParquetList <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">binary_as_text</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">use_logical_type</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet">StageExternalS3CompatibleDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_as_text`<sup>Required</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```python
binary_as_text: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_logical_type`<sup>Required</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```python
use_logical_type: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_vectorized_scanner`<sup>Required</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatParquet">StageExternalS3CompatibleDescribeOutputFileFormatParquet</a>

---


### StageExternalS3CompatibleDescribeOutputFileFormatXmlList <a name="StageExternalS3CompatibleDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference <a name="StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">disable_auto_convert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">preserve_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">strip_outer_element</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml">StageExternalS3CompatibleDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `disable_auto_convert`<sup>Required</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```python
disable_auto_convert: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preserve_space`<sup>Required</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```python
preserve_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_element`<sup>Required</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```python
strip_outer_element: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatXml">StageExternalS3CompatibleDescribeOutputFileFormatXml</a>

---


### StageExternalS3CompatibleDescribeOutputList <a name="StageExternalS3CompatibleDescribeOutputList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputLocationList <a name="StageExternalS3CompatibleDescribeOutputLocationList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleDescribeOutputLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleDescribeOutputLocationOutputReference <a name="StageExternalS3CompatibleDescribeOutputLocationOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.url">url</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation">StageExternalS3CompatibleDescribeOutputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.url"></a>

```python
url: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutputLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocation">StageExternalS3CompatibleDescribeOutputLocation</a>

---


### StageExternalS3CompatibleDescribeOutputOutputReference <a name="StageExternalS3CompatibleDescribeOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.directoryTable">directory_table</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList">StageExternalS3CompatibleDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fileFormat">file_format</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList">StageExternalS3CompatibleDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList">StageExternalS3CompatibleDescribeOutputLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput">StageExternalS3CompatibleDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_table`<sup>Required</sup> <a name="directory_table" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.directoryTable"></a>

```python
directory_table: StageExternalS3CompatibleDescribeOutputDirectoryTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputDirectoryTableList">StageExternalS3CompatibleDescribeOutputDirectoryTableList</a>

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.fileFormat"></a>

```python
file_format: StageExternalS3CompatibleDescribeOutputFileFormatList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputFileFormatList">StageExternalS3CompatibleDescribeOutputFileFormatList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.location"></a>

```python
location: StageExternalS3CompatibleDescribeOutputLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputLocationList">StageExternalS3CompatibleDescribeOutputLocationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDescribeOutput">StageExternalS3CompatibleDescribeOutput</a>

---


### StageExternalS3CompatibleDirectoryOutputReference <a name="StageExternalS3CompatibleDirectoryOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetAutoRefresh">reset_auto_refresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetRefreshOnCreate">reset_refresh_on_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_refresh` <a name="reset_auto_refresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetAutoRefresh"></a>

```python
def reset_auto_refresh() -> None
```

##### `reset_refresh_on_create` <a name="reset_refresh_on_create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.resetRefreshOnCreate"></a>

```python
def reset_refresh_on_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefreshInput">auto_refresh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreateInput">refresh_on_create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreate">refresh_on_create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefreshInput"></a>

```python
auto_refresh_input: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `refresh_on_create_input`<sup>Optional</sup> <a name="refresh_on_create_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreateInput"></a>

```python
refresh_on_create_input: str
```

- *Type:* str

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `refresh_on_create`<sup>Required</sup> <a name="refresh_on_create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.refreshOnCreate"></a>

```python
refresh_on_create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleDirectory
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleDirectory">StageExternalS3CompatibleDirectory</a>

---


### StageExternalS3CompatibleFileFormatAvroOutputReference <a name="StageExternalS3CompatibleFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

---


### StageExternalS3CompatibleFileFormatCsvOutputReference <a name="StageExternalS3CompatibleFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEmptyFieldAsNull">reset_empty_field_as_null</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch">reset_error_on_column_count_mismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscape">reset_escape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscapeUnenclosedField">reset_escape_unenclosed_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy">reset_field_optionally_enclosed_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetMultiLine">reset_multi_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetParseHeader">reset_parse_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetRecordDelimiter">reset_record_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipBlankLines">reset_skip_blank_lines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipHeader">reset_skip_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_empty_field_as_null` <a name="reset_empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEmptyFieldAsNull"></a>

```python
def reset_empty_field_as_null() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_error_on_column_count_mismatch` <a name="reset_error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch"></a>

```python
def reset_error_on_column_count_mismatch() -> None
```

##### `reset_escape` <a name="reset_escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscape"></a>

```python
def reset_escape() -> None
```

##### `reset_escape_unenclosed_field` <a name="reset_escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetEscapeUnenclosedField"></a>

```python
def reset_escape_unenclosed_field() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_field_optionally_enclosed_by` <a name="reset_field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy"></a>

```python
def reset_field_optionally_enclosed_by() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_parse_header` <a name="reset_parse_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetParseHeader"></a>

```python
def reset_parse_header() -> None
```

##### `reset_record_delimiter` <a name="reset_record_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetRecordDelimiter"></a>

```python
def reset_record_delimiter() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_blank_lines` <a name="reset_skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipBlankLines"></a>

```python
def reset_skip_blank_lines() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_skip_header` <a name="reset_skip_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetSkipHeader"></a>

```python
def reset_skip_header() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNullInput">empty_field_as_null_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput">error_on_column_count_mismatch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeInput">escape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput">escape_unenclosed_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput">field_optionally_enclosed_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLineInput">multi_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeaderInput">parse_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiterInput">record_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLinesInput">skip_blank_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeaderInput">skip_header_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLine">multi_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeader">parse_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `empty_field_as_null_input`<sup>Optional</sup> <a name="empty_field_as_null_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNullInput"></a>

```python
empty_field_as_null_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch_input`<sup>Optional</sup> <a name="error_on_column_count_mismatch_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput"></a>

```python
error_on_column_count_mismatch_input: str
```

- *Type:* str

---

##### `escape_input`<sup>Optional</sup> <a name="escape_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeInput"></a>

```python
escape_input: str
```

- *Type:* str

---

##### `escape_unenclosed_field_input`<sup>Optional</sup> <a name="escape_unenclosed_field_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput"></a>

```python
escape_unenclosed_field_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by_input`<sup>Optional</sup> <a name="field_optionally_enclosed_by_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput"></a>

```python
field_optionally_enclosed_by_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLineInput"></a>

```python
multi_line_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header_input`<sup>Optional</sup> <a name="parse_header_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeaderInput"></a>

```python
parse_header_input: str
```

- *Type:* str

---

##### `record_delimiter_input`<sup>Optional</sup> <a name="record_delimiter_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiterInput"></a>

```python
record_delimiter_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_blank_lines_input`<sup>Optional</sup> <a name="skip_blank_lines_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLinesInput"></a>

```python
skip_blank_lines_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `skip_header_input`<sup>Optional</sup> <a name="skip_header_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeaderInput"></a>

```python
skip_header_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: str
```

- *Type:* str

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.parseHeader"></a>

```python
parse_header: str
```

- *Type:* str

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipBlankLines"></a>

```python
skip_blank_lines: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

---


### StageExternalS3CompatibleFileFormatJsonOutputReference <a name="StageExternalS3CompatibleFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetAllowDuplicate">reset_allow_duplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetEnableOctal">reset_enable_octal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetIgnoreUtf8Errors">reset_ignore_utf8_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetMultiLine">reset_multi_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripNullValues">reset_strip_null_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripOuterArray">reset_strip_outer_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_duplicate` <a name="reset_allow_duplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetAllowDuplicate"></a>

```python
def reset_allow_duplicate() -> None
```

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_enable_octal` <a name="reset_enable_octal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetEnableOctal"></a>

```python
def reset_enable_octal() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_ignore_utf8_errors` <a name="reset_ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetIgnoreUtf8Errors"></a>

```python
def reset_ignore_utf8_errors() -> None
```

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_strip_null_values` <a name="reset_strip_null_values" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripNullValues"></a>

```python
def reset_strip_null_values() -> None
```

##### `reset_strip_outer_array` <a name="reset_strip_outer_array" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetStripOuterArray"></a>

```python
def reset_strip_outer_array() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicateInput">allow_duplicate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctalInput">enable_octal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput">ignore_utf8_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLineInput">multi_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValuesInput">strip_null_values_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArrayInput">strip_outer_array_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctal">enable_octal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLine">multi_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValues">strip_null_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_duplicate_input`<sup>Optional</sup> <a name="allow_duplicate_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicateInput"></a>

```python
allow_duplicate_input: str
```

- *Type:* str

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `enable_octal_input`<sup>Optional</sup> <a name="enable_octal_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctalInput"></a>

```python
enable_octal_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `ignore_utf8_errors_input`<sup>Optional</sup> <a name="ignore_utf8_errors_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput"></a>

```python
ignore_utf8_errors_input: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLineInput"></a>

```python
multi_line_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `strip_null_values_input`<sup>Optional</sup> <a name="strip_null_values_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValuesInput"></a>

```python
strip_null_values_input: str
```

- *Type:* str

---

##### `strip_outer_array_input`<sup>Optional</sup> <a name="strip_outer_array_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArrayInput"></a>

```python
strip_outer_array_input: str
```

- *Type:* str

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.allowDuplicate"></a>

```python
allow_duplicate: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.enableOctal"></a>

```python
enable_octal: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripNullValues"></a>

```python
strip_null_values: str
```

- *Type:* str

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.stripOuterArray"></a>

```python
strip_outer_array: str
```

- *Type:* str

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

---


### StageExternalS3CompatibleFileFormatOrcOutputReference <a name="StageExternalS3CompatibleFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

---


### StageExternalS3CompatibleFileFormatOutputReference <a name="StageExternalS3CompatibleFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro">put_avro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc">put_orc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet">put_parquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml">put_xml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetAvro">reset_avro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetCsv">reset_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetFormatName">reset_format_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetOrc">reset_orc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetParquet">reset_parquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetXml">reset_xml</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro` <a name="put_avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro"></a>

```python
def put_avro(
  compression: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
) -> None
```

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro.parameter.compression"></a>

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putAvro.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

##### `put_csv` <a name="put_csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv"></a>

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

###### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#binary_format StageExternalS3Compatible#binary_format}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

###### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#date_format StageExternalS3Compatible#date_format}

---

###### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.emptyFieldAsNull"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#empty_field_as_null StageExternalS3Compatible#empty_field_as_null}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.encoding"></a>

- *Type:* str

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#encoding StageExternalS3Compatible#encoding}

---

###### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.errorOnColumnCountMismatch"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#error_on_column_count_mismatch StageExternalS3Compatible#error_on_column_count_mismatch}

---

###### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.escape"></a>

- *Type:* str

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#escape StageExternalS3Compatible#escape}

---

###### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.escapeUnenclosedField"></a>

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#escape_unenclosed_field StageExternalS3Compatible#escape_unenclosed_field}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.fieldDelimiter"></a>

- *Type:* str

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#field_delimiter StageExternalS3Compatible#field_delimiter}

---

###### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.fieldOptionallyEnclosedBy"></a>

- *Type:* str

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#field_optionally_enclosed_by StageExternalS3Compatible#field_optionally_enclosed_by}

---

###### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#file_extension StageExternalS3Compatible#file_extension}

---

###### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.multiLine"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#multi_line StageExternalS3Compatible#multi_line}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

###### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.parseHeader"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#parse_header StageExternalS3Compatible#parse_header}

---

###### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.recordDelimiter"></a>

- *Type:* str

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#record_delimiter StageExternalS3Compatible#record_delimiter}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

###### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.skipBlankLines"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_blank_lines StageExternalS3Compatible#skip_blank_lines}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

###### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.skipHeader"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_header StageExternalS3Compatible#skip_header}

---

###### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#time_format StageExternalS3Compatible#time_format}

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#timestamp_format StageExternalS3Compatible#timestamp_format}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putCsv.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

##### `put_json` <a name="put_json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson"></a>

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

###### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.allowDuplicate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#allow_duplicate StageExternalS3Compatible#allow_duplicate}

---

###### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#binary_format StageExternalS3Compatible#binary_format}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

###### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#date_format StageExternalS3Compatible#date_format}

---

###### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.enableOctal"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#enable_octal StageExternalS3Compatible#enable_octal}

---

###### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#file_extension StageExternalS3Compatible#file_extension}

---

###### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.ignoreUtf8Errors"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#ignore_utf8_errors StageExternalS3Compatible#ignore_utf8_errors}

---

###### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.multiLine"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#multi_line StageExternalS3Compatible#multi_line}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

###### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.stripNullValues"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#strip_null_values StageExternalS3Compatible#strip_null_values}

---

###### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.stripOuterArray"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#strip_outer_array StageExternalS3Compatible#strip_outer_array}

---

###### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#time_format StageExternalS3Compatible#time_format}

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#timestamp_format StageExternalS3Compatible#timestamp_format}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putJson.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

##### `put_orc` <a name="put_orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc"></a>

```python
def put_orc(
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  trim_space: str = None
) -> None
```

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putOrc.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

##### `put_parquet` <a name="put_parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet"></a>

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

###### `binary_as_text`<sup>Optional</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.binaryAsText"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#binary_as_text StageExternalS3Compatible#binary_as_text}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.compression"></a>

- *Type:* str

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

###### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#null_if StageExternalS3Compatible#null_if}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

###### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#trim_space StageExternalS3Compatible#trim_space}

---

###### `use_logical_type`<sup>Optional</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.useLogicalType"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#use_logical_type StageExternalS3Compatible#use_logical_type}

---

###### `use_vectorized_scanner`<sup>Optional</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putParquet.parameter.useVectorizedScanner"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#use_vectorized_scanner StageExternalS3Compatible#use_vectorized_scanner}

---

##### `put_xml` <a name="put_xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml"></a>

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

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#compression StageExternalS3Compatible#compression}

---

###### `disable_auto_convert`<sup>Optional</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.disableAutoConvert"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#disable_auto_convert StageExternalS3Compatible#disable_auto_convert}

---

###### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.ignoreUtf8Errors"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#ignore_utf8_errors StageExternalS3Compatible#ignore_utf8_errors}

---

###### `preserve_space`<sup>Optional</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.preserveSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#preserve_space StageExternalS3Compatible#preserve_space}

---

###### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#replace_invalid_characters StageExternalS3Compatible#replace_invalid_characters}

---

###### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#skip_byte_order_mark StageExternalS3Compatible#skip_byte_order_mark}

---

###### `strip_outer_element`<sup>Optional</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.putXml.parameter.stripOuterElement"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_s3_compatible#strip_outer_element StageExternalS3Compatible#strip_outer_element}

---

##### `reset_avro` <a name="reset_avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetAvro"></a>

```python
def reset_avro() -> None
```

##### `reset_csv` <a name="reset_csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```

##### `reset_format_name` <a name="reset_format_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetFormatName"></a>

```python
def reset_format_name() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_orc` <a name="reset_orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetOrc"></a>

```python
def reset_orc() -> None
```

##### `reset_parquet` <a name="reset_parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetParquet"></a>

```python
def reset_parquet() -> None
```

##### `reset_xml` <a name="reset_xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.resetXml"></a>

```python
def reset_xml() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference">StageExternalS3CompatibleFileFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference">StageExternalS3CompatibleFileFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference">StageExternalS3CompatibleFileFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference">StageExternalS3CompatibleFileFormatOrcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference">StageExternalS3CompatibleFileFormatParquetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference">StageExternalS3CompatibleFileFormatXmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avroInput">avro_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csvInput">csv_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatNameInput">format_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.jsonInput">json_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orcInput">orc_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquetInput">parquet_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xmlInput">xml_input</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatName">format_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avro"></a>

```python
avro: StageExternalS3CompatibleFileFormatAvroOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvroOutputReference">StageExternalS3CompatibleFileFormatAvroOutputReference</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csv"></a>

```python
csv: StageExternalS3CompatibleFileFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsvOutputReference">StageExternalS3CompatibleFileFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.json"></a>

```python
json: StageExternalS3CompatibleFileFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJsonOutputReference">StageExternalS3CompatibleFileFormatJsonOutputReference</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orc"></a>

```python
orc: StageExternalS3CompatibleFileFormatOrcOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrcOutputReference">StageExternalS3CompatibleFileFormatOrcOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquet"></a>

```python
parquet: StageExternalS3CompatibleFileFormatParquetOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference">StageExternalS3CompatibleFileFormatParquetOutputReference</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xml"></a>

```python
xml: StageExternalS3CompatibleFileFormatXmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference">StageExternalS3CompatibleFileFormatXmlOutputReference</a>

---

##### `avro_input`<sup>Optional</sup> <a name="avro_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.avroInput"></a>

```python
avro_input: StageExternalS3CompatibleFileFormatAvro
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatAvro">StageExternalS3CompatibleFileFormatAvro</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.csvInput"></a>

```python
csv_input: StageExternalS3CompatibleFileFormatCsv
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatCsv">StageExternalS3CompatibleFileFormatCsv</a>

---

##### `format_name_input`<sup>Optional</sup> <a name="format_name_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatNameInput"></a>

```python
format_name_input: str
```

- *Type:* str

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.jsonInput"></a>

```python
json_input: StageExternalS3CompatibleFileFormatJson
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatJson">StageExternalS3CompatibleFileFormatJson</a>

---

##### `orc_input`<sup>Optional</sup> <a name="orc_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.orcInput"></a>

```python
orc_input: StageExternalS3CompatibleFileFormatOrc
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOrc">StageExternalS3CompatibleFileFormatOrc</a>

---

##### `parquet_input`<sup>Optional</sup> <a name="parquet_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.parquetInput"></a>

```python
parquet_input: StageExternalS3CompatibleFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

---

##### `xml_input`<sup>Optional</sup> <a name="xml_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.xmlInput"></a>

```python
xml_input: StageExternalS3CompatibleFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

---

##### `format_name`<sup>Required</sup> <a name="format_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.formatName"></a>

```python
format_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleFileFormat
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormat">StageExternalS3CompatibleFileFormat</a>

---


### StageExternalS3CompatibleFileFormatParquetOutputReference <a name="StageExternalS3CompatibleFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetBinaryAsText">reset_binary_as_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetTrimSpace">reset_trim_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseLogicalType">reset_use_logical_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseVectorizedScanner">reset_use_vectorized_scanner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_binary_as_text` <a name="reset_binary_as_text" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetBinaryAsText"></a>

```python
def reset_binary_as_text() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```

##### `reset_use_logical_type` <a name="reset_use_logical_type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseLogicalType"></a>

```python
def reset_use_logical_type() -> None
```

##### `reset_use_vectorized_scanner` <a name="reset_use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.resetUseVectorizedScanner"></a>

```python
def reset_use_vectorized_scanner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsTextInput">binary_as_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalTypeInput">use_logical_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScannerInput">use_vectorized_scanner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsText">binary_as_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalType">use_logical_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_as_text_input`<sup>Optional</sup> <a name="binary_as_text_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsTextInput"></a>

```python
binary_as_text_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `use_logical_type_input`<sup>Optional</sup> <a name="use_logical_type_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalTypeInput"></a>

```python
use_logical_type_input: str
```

- *Type:* str

---

##### `use_vectorized_scanner_input`<sup>Optional</sup> <a name="use_vectorized_scanner_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScannerInput"></a>

```python
use_vectorized_scanner_input: str
```

- *Type:* str

---

##### `binary_as_text`<sup>Required</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.binaryAsText"></a>

```python
binary_as_text: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

##### `use_logical_type`<sup>Required</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useLogicalType"></a>

```python
use_logical_type: str
```

- *Type:* str

---

##### `use_vectorized_scanner`<sup>Required</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquetOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleFileFormatParquet
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatParquet">StageExternalS3CompatibleFileFormatParquet</a>

---


### StageExternalS3CompatibleFileFormatXmlOutputReference <a name="StageExternalS3CompatibleFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetDisableAutoConvert">reset_disable_auto_convert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetIgnoreUtf8Errors">reset_ignore_utf8_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetPreserveSpace">reset_preserve_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetStripOuterElement">reset_strip_outer_element</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_disable_auto_convert` <a name="reset_disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetDisableAutoConvert"></a>

```python
def reset_disable_auto_convert() -> None
```

##### `reset_ignore_utf8_errors` <a name="reset_ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetIgnoreUtf8Errors"></a>

```python
def reset_ignore_utf8_errors() -> None
```

##### `reset_preserve_space` <a name="reset_preserve_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetPreserveSpace"></a>

```python
def reset_preserve_space() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_strip_outer_element` <a name="reset_strip_outer_element" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.resetStripOuterElement"></a>

```python
def reset_strip_outer_element() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvertInput">disable_auto_convert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput">ignore_utf8_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpaceInput">preserve_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElementInput">strip_outer_element_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvert">disable_auto_convert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpace">preserve_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElement">strip_outer_element</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `disable_auto_convert_input`<sup>Optional</sup> <a name="disable_auto_convert_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvertInput"></a>

```python
disable_auto_convert_input: str
```

- *Type:* str

---

##### `ignore_utf8_errors_input`<sup>Optional</sup> <a name="ignore_utf8_errors_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput"></a>

```python
ignore_utf8_errors_input: str
```

- *Type:* str

---

##### `preserve_space_input`<sup>Optional</sup> <a name="preserve_space_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpaceInput"></a>

```python
preserve_space_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `strip_outer_element_input`<sup>Optional</sup> <a name="strip_outer_element_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElementInput"></a>

```python
strip_outer_element_input: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `disable_auto_convert`<sup>Required</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```python
disable_auto_convert: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

---

##### `preserve_space`<sup>Required</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.preserveSpace"></a>

```python
preserve_space: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `strip_outer_element`<sup>Required</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.stripOuterElement"></a>

```python
strip_outer_element: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXmlOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleFileFormatXml
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleFileFormatXml">StageExternalS3CompatibleFileFormatXml</a>

---


### StageExternalS3CompatibleShowOutputList <a name="StageExternalS3CompatibleShowOutputList" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StageExternalS3CompatibleShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StageExternalS3CompatibleShowOutputOutputReference <a name="StageExternalS3CompatibleShowOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.directoryEnabled">directory_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasCredentials">has_credentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasEncryptionKey">has_encryption_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.storageIntegration">storage_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput">StageExternalS3CompatibleShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `directory_enabled`<sup>Required</sup> <a name="directory_enabled" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.directoryEnabled"></a>

```python
directory_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `has_credentials`<sup>Required</sup> <a name="has_credentials" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasCredentials"></a>

```python
has_credentials: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `has_encryption_key`<sup>Required</sup> <a name="has_encryption_key" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.hasEncryptionKey"></a>

```python
has_encryption_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: StageExternalS3CompatibleShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleShowOutput">StageExternalS3CompatibleShowOutput</a>

---


### StageExternalS3CompatibleTimeoutsOutputReference <a name="StageExternalS3CompatibleTimeoutsOutputReference" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import stage_external_s3_compatible

stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StageExternalS3CompatibleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalS3Compatible.StageExternalS3CompatibleTimeouts">StageExternalS3CompatibleTimeouts</a>

---



