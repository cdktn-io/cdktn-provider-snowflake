# `grantPrivilegesToDatabaseRole` Submodule <a name="`grantPrivilegesToDatabaseRole` Submodule" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToDatabaseRole <a name="GrantPrivilegesToDatabaseRole" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role snowflake_grant_privileges_to_database_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_role_name: str,
  all_privileges: bool | IResolvable = None,
  always_apply: bool | IResolvable = None,
  always_apply_trigger: str = None,
  id: str = None,
  on_database: str = None,
  on_schema: GrantPrivilegesToDatabaseRoleOnSchema = None,
  on_schema_object: GrantPrivilegesToDatabaseRoleOnSchemaObject = None,
  privileges: typing.List[str] = None,
  timeouts: GrantPrivilegesToDatabaseRoleTimeouts = None,
  with_grant_option: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.databaseRoleName">database_role_name</a></code> | <code>str</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.allPrivileges">all_privileges</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) Grant all privileges on the database role. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.alwaysApply">always_apply</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.alwaysApplyTrigger">always_apply_trigger</a></code> | <code>str</code> | (Default: ``) This is a helper field and should not be set. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#id GrantPrivilegesToDatabaseRole#id}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.onDatabase">on_database</a></code> | <code>str</code> | The fully qualified name of the database on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.onSchema">on_schema</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.privileges">privileges</a></code> | <code>typing.List[str]</code> | The privileges to grant on the database role. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts">GrantPrivilegesToDatabaseRoleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) If specified, allows the recipient role to grant the privileges to other roles. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_role_name`<sup>Required</sup> <a name="database_role_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.databaseRoleName"></a>

- *Type:* str

The fully qualified name of the database role to which privileges will be granted.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#database_role_name GrantPrivilegesToDatabaseRole#database_role_name}

---

##### `all_privileges`<sup>Optional</sup> <a name="all_privileges" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.allPrivileges"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `false`) Grant all privileges on the database role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#all_privileges GrantPrivilegesToDatabaseRole#all_privileges}

---

##### `always_apply`<sup>Optional</sup> <a name="always_apply" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.alwaysApply"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `false`) If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges.

It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#always_apply GrantPrivilegesToDatabaseRole#always_apply}

---

##### `always_apply_trigger`<sup>Optional</sup> <a name="always_apply_trigger" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.alwaysApplyTrigger"></a>

- *Type:* str

(Default: ``) This is a helper field and should not be set.

Its main purpose is to help to achieve the functionality described by the always_apply field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#always_apply_trigger GrantPrivilegesToDatabaseRole#always_apply_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#id GrantPrivilegesToDatabaseRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_database`<sup>Optional</sup> <a name="on_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.onDatabase"></a>

- *Type:* str

The fully qualified name of the database on which privileges will be granted.

For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#on_database GrantPrivilegesToDatabaseRole#on_database}

---

##### `on_schema`<sup>Optional</sup> <a name="on_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.onSchema"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#on_schema GrantPrivilegesToDatabaseRole#on_schema}

---

##### `on_schema_object`<sup>Optional</sup> <a name="on_schema_object" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.onSchemaObject"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#on_schema_object GrantPrivilegesToDatabaseRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.privileges"></a>

- *Type:* typing.List[str]

The privileges to grant on the database role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#privileges GrantPrivilegesToDatabaseRole#privileges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts">GrantPrivilegesToDatabaseRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#timeouts GrantPrivilegesToDatabaseRole#timeouts}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.Initializer.parameter.withGrantOption"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `false`) If specified, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#with_grant_option GrantPrivilegesToDatabaseRole#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchema">put_on_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject">put_on_schema_object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAllPrivileges">reset_all_privileges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAlwaysApply">reset_always_apply</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAlwaysApplyTrigger">reset_always_apply_trigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnDatabase">reset_on_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnSchema">reset_on_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnSchemaObject">reset_on_schema_object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetPrivileges">reset_privileges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_on_schema` <a name="put_on_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchema"></a>

```python
def put_on_schema(
  all_schemas_in_database: str = None,
  future_schemas_in_database: str = None,
  schema_name: str = None
) -> None
```

###### `all_schemas_in_database`<sup>Optional</sup> <a name="all_schemas_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchema.parameter.allSchemasInDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#all_schemas_in_database GrantPrivilegesToDatabaseRole#all_schemas_in_database}

---

###### `future_schemas_in_database`<sup>Optional</sup> <a name="future_schemas_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchema.parameter.futureSchemasInDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#future_schemas_in_database GrantPrivilegesToDatabaseRole#future_schemas_in_database}

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchema.parameter.schemaName"></a>

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#schema_name GrantPrivilegesToDatabaseRole#schema_name}

---

##### `put_on_schema_object` <a name="put_on_schema_object" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject"></a>

```python
def put_on_schema_object(
  all: GrantPrivilegesToDatabaseRoleOnSchemaObjectAll = None,
  future: GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture = None,
  object_name: str = None,
  object_type: str = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject.parameter.all"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#all GrantPrivilegesToDatabaseRole#all}

---

###### `future`<sup>Optional</sup> <a name="future" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject.parameter.future"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#future GrantPrivilegesToDatabaseRole#future}

---

###### `object_name`<sup>Optional</sup> <a name="object_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject.parameter.objectName"></a>

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#object_name GrantPrivilegesToDatabaseRole#object_name}

---

###### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putOnSchemaObject.parameter.objectType"></a>

- *Type:* str

The object type of the schema object on which privileges will be granted.

Valid values are: AGENT | AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | CORTEX SEARCH SERVICE | DATA METRIC FUNCTION | DATASET | DBT PROJECT | DYNAMIC TABLE | EVENT TABLE | EXPERIMENT | EXTERNAL TABLE | FILE FORMAT | FUNCTION | GATEWAY | GIT REPOSITORY | HYBRID TABLE | IMAGE REPOSITORY | ICEBERG TABLE | JOIN POLICY | MASKING POLICY | MATERIALIZED VIEW | MCP SERVER | MODEL | MODEL MONITOR | NETWORK RULE | NOTEBOOK | NOTEBOOK PROJECT | ONLINE FEATURE TABLE | PACKAGES POLICY | PASSWORD POLICY | PIPE | PRIVACY POLICY | PROCEDURE | PROJECTION POLICY | ROW ACCESS POLICY | SECRET | SEMANTIC VIEW | SERVICE | SESSION POLICY | SEQUENCE | SNAPSHOT | SNAPSHOT POLICY | SNAPSHOT SET | STAGE | STORAGE LIFECYCLE POLICY | STREAM | STREAMLIT | TABLE | TAG | TASK | VIEW | WORKSPACE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#object_type GrantPrivilegesToDatabaseRole#object_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#create GrantPrivilegesToDatabaseRole#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#delete GrantPrivilegesToDatabaseRole#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#read GrantPrivilegesToDatabaseRole#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#update GrantPrivilegesToDatabaseRole#update}.

---

##### `reset_all_privileges` <a name="reset_all_privileges" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAllPrivileges"></a>

```python
def reset_all_privileges() -> None
```

##### `reset_always_apply` <a name="reset_always_apply" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAlwaysApply"></a>

```python
def reset_always_apply() -> None
```

##### `reset_always_apply_trigger` <a name="reset_always_apply_trigger" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetAlwaysApplyTrigger"></a>

```python
def reset_always_apply_trigger() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on_database` <a name="reset_on_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnDatabase"></a>

```python
def reset_on_database() -> None
```

##### `reset_on_schema` <a name="reset_on_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnSchema"></a>

```python
def reset_on_schema() -> None
```

##### `reset_on_schema_object` <a name="reset_on_schema_object" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetOnSchemaObject"></a>

```python
def reset_on_schema_object() -> None
```

##### `reset_privileges` <a name="reset_privileges" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetPrivileges"></a>

```python
def reset_privileges() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GrantPrivilegesToDatabaseRole resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isConstruct"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GrantPrivilegesToDatabaseRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GrantPrivilegesToDatabaseRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GrantPrivilegesToDatabaseRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToDatabaseRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchema">on_schema</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference">GrantPrivilegesToDatabaseRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.allPrivilegesInput">all_privileges_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyInput">always_apply_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyTriggerInput">always_apply_trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.databaseRoleNameInput">database_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onDatabaseInput">on_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaInput">on_schema_input</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaObjectInput">on_schema_object_input</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.privilegesInput">privileges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts">GrantPrivilegesToDatabaseRoleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.allPrivileges">all_privileges</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApply">always_apply</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyTrigger">always_apply_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.databaseRoleName">database_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onDatabase">on_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.withGrantOption">with_grant_option</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `on_schema`<sup>Required</sup> <a name="on_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchema"></a>

```python
on_schema: GrantPrivilegesToDatabaseRoleOnSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaOutputReference</a>

---

##### `on_schema_object`<sup>Required</sup> <a name="on_schema_object" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaObject"></a>

```python
on_schema_object: GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.timeouts"></a>

```python
timeouts: GrantPrivilegesToDatabaseRoleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference">GrantPrivilegesToDatabaseRoleTimeoutsOutputReference</a>

---

##### `all_privileges_input`<sup>Optional</sup> <a name="all_privileges_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.allPrivilegesInput"></a>

```python
all_privileges_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `always_apply_input`<sup>Optional</sup> <a name="always_apply_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyInput"></a>

```python
always_apply_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `always_apply_trigger_input`<sup>Optional</sup> <a name="always_apply_trigger_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyTriggerInput"></a>

```python
always_apply_trigger_input: str
```

- *Type:* str

---

##### `database_role_name_input`<sup>Optional</sup> <a name="database_role_name_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.databaseRoleNameInput"></a>

```python
database_role_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_database_input`<sup>Optional</sup> <a name="on_database_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onDatabaseInput"></a>

```python
on_database_input: str
```

- *Type:* str

---

##### `on_schema_input`<sup>Optional</sup> <a name="on_schema_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaInput"></a>

```python
on_schema_input: GrantPrivilegesToDatabaseRoleOnSchema
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a>

---

##### `on_schema_object_input`<sup>Optional</sup> <a name="on_schema_object_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onSchemaObjectInput"></a>

```python
on_schema_object_input: GrantPrivilegesToDatabaseRoleOnSchemaObject
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a>

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.privilegesInput"></a>

```python
privileges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GrantPrivilegesToDatabaseRoleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts">GrantPrivilegesToDatabaseRoleTimeouts</a>

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.withGrantOptionInput"></a>

```python
with_grant_option_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `all_privileges`<sup>Required</sup> <a name="all_privileges" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.allPrivileges"></a>

```python
all_privileges: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `always_apply`<sup>Required</sup> <a name="always_apply" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApply"></a>

```python
always_apply: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `always_apply_trigger`<sup>Required</sup> <a name="always_apply_trigger" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.alwaysApplyTrigger"></a>

```python
always_apply_trigger: str
```

- *Type:* str

---

##### `database_role_name`<sup>Required</sup> <a name="database_role_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.databaseRoleName"></a>

```python
database_role_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `on_database`<sup>Required</sup> <a name="on_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.onDatabase"></a>

```python
on_database: str
```

- *Type:* str

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.withGrantOption"></a>

```python
with_grant_option: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToDatabaseRoleConfig <a name="GrantPrivilegesToDatabaseRoleConfig" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_role_name: str,
  all_privileges: bool | IResolvable = None,
  always_apply: bool | IResolvable = None,
  always_apply_trigger: str = None,
  id: str = None,
  on_database: str = None,
  on_schema: GrantPrivilegesToDatabaseRoleOnSchema = None,
  on_schema_object: GrantPrivilegesToDatabaseRoleOnSchemaObject = None,
  privileges: typing.List[str] = None,
  timeouts: GrantPrivilegesToDatabaseRoleTimeouts = None,
  with_grant_option: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.databaseRoleName">database_role_name</a></code> | <code>str</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.allPrivileges">all_privileges</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) Grant all privileges on the database role. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.alwaysApply">always_apply</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.alwaysApplyTrigger">always_apply_trigger</a></code> | <code>str</code> | (Default: ``) This is a helper field and should not be set. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#id GrantPrivilegesToDatabaseRole#id}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onDatabase">on_database</a></code> | <code>str</code> | The fully qualified name of the database on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onSchema">on_schema</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | The privileges to grant on the database role. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts">GrantPrivilegesToDatabaseRoleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.withGrantOption">with_grant_option</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) If specified, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_role_name`<sup>Required</sup> <a name="database_role_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.databaseRoleName"></a>

```python
database_role_name: str
```

- *Type:* str

The fully qualified name of the database role to which privileges will be granted.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#database_role_name GrantPrivilegesToDatabaseRole#database_role_name}

---

##### `all_privileges`<sup>Optional</sup> <a name="all_privileges" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.allPrivileges"></a>

```python
all_privileges: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `false`) Grant all privileges on the database role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#all_privileges GrantPrivilegesToDatabaseRole#all_privileges}

---

##### `always_apply`<sup>Optional</sup> <a name="always_apply" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.alwaysApply"></a>

```python
always_apply: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `false`) If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges.

It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#always_apply GrantPrivilegesToDatabaseRole#always_apply}

---

##### `always_apply_trigger`<sup>Optional</sup> <a name="always_apply_trigger" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.alwaysApplyTrigger"></a>

```python
always_apply_trigger: str
```

- *Type:* str

(Default: ``) This is a helper field and should not be set.

Its main purpose is to help to achieve the functionality described by the always_apply field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#always_apply_trigger GrantPrivilegesToDatabaseRole#always_apply_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#id GrantPrivilegesToDatabaseRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_database`<sup>Optional</sup> <a name="on_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onDatabase"></a>

```python
on_database: str
```

- *Type:* str

The fully qualified name of the database on which privileges will be granted.

For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#on_database GrantPrivilegesToDatabaseRole#on_database}

---

##### `on_schema`<sup>Optional</sup> <a name="on_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onSchema"></a>

```python
on_schema: GrantPrivilegesToDatabaseRoleOnSchema
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#on_schema GrantPrivilegesToDatabaseRole#on_schema}

---

##### `on_schema_object`<sup>Optional</sup> <a name="on_schema_object" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.onSchemaObject"></a>

```python
on_schema_object: GrantPrivilegesToDatabaseRoleOnSchemaObject
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#on_schema_object GrantPrivilegesToDatabaseRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

The privileges to grant on the database role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#privileges GrantPrivilegesToDatabaseRole#privileges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.timeouts"></a>

```python
timeouts: GrantPrivilegesToDatabaseRoleTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts">GrantPrivilegesToDatabaseRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#timeouts GrantPrivilegesToDatabaseRole#timeouts}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleConfig.property.withGrantOption"></a>

```python
with_grant_option: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `false`) If specified, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#with_grant_option GrantPrivilegesToDatabaseRole#with_grant_option}

---

### GrantPrivilegesToDatabaseRoleOnSchema <a name="GrantPrivilegesToDatabaseRoleOnSchema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema(
  all_schemas_in_database: str = None,
  future_schemas_in_database: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.allSchemasInDatabase">all_schemas_in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.futureSchemasInDatabase">future_schemas_in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.schemaName">schema_name</a></code> | <code>str</code> | The fully qualified name of the schema. |

---

##### `all_schemas_in_database`<sup>Optional</sup> <a name="all_schemas_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.allSchemasInDatabase"></a>

```python
all_schemas_in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#all_schemas_in_database GrantPrivilegesToDatabaseRole#all_schemas_in_database}

---

##### `future_schemas_in_database`<sup>Optional</sup> <a name="future_schemas_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.futureSchemasInDatabase"></a>

```python
future_schemas_in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#future_schemas_in_database GrantPrivilegesToDatabaseRole#future_schemas_in_database}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#schema_name GrantPrivilegesToDatabaseRole#schema_name}

---

### GrantPrivilegesToDatabaseRoleOnSchemaObject <a name="GrantPrivilegesToDatabaseRoleOnSchemaObject" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject(
  all: GrantPrivilegesToDatabaseRoleOnSchemaObjectAll = None,
  future: GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture = None,
  object_name: str = None,
  object_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.all">all</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a></code> | all block. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.future">future</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a></code> | future block. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.objectName">object_name</a></code> | <code>str</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.objectType">object_type</a></code> | <code>str</code> | The object type of the schema object on which privileges will be granted. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.all"></a>

```python
all: GrantPrivilegesToDatabaseRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#all GrantPrivilegesToDatabaseRole#all}

---

##### `future`<sup>Optional</sup> <a name="future" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.future"></a>

```python
future: GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#future GrantPrivilegesToDatabaseRole#future}

---

##### `object_name`<sup>Optional</sup> <a name="object_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#object_name GrantPrivilegesToDatabaseRole#object_name}

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

The object type of the schema object on which privileges will be granted.

Valid values are: AGENT | AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | CORTEX SEARCH SERVICE | DATA METRIC FUNCTION | DATASET | DBT PROJECT | DYNAMIC TABLE | EVENT TABLE | EXPERIMENT | EXTERNAL TABLE | FILE FORMAT | FUNCTION | GATEWAY | GIT REPOSITORY | HYBRID TABLE | IMAGE REPOSITORY | ICEBERG TABLE | JOIN POLICY | MASKING POLICY | MATERIALIZED VIEW | MCP SERVER | MODEL | MODEL MONITOR | NETWORK RULE | NOTEBOOK | NOTEBOOK PROJECT | ONLINE FEATURE TABLE | PACKAGES POLICY | PASSWORD POLICY | PIPE | PRIVACY POLICY | PROCEDURE | PROJECTION POLICY | ROW ACCESS POLICY | SECRET | SEMANTIC VIEW | SERVICE | SESSION POLICY | SEQUENCE | SNAPSHOT | SNAPSHOT POLICY | SNAPSHOT SET | STAGE | STORAGE LIFECYCLE POLICY | STREAM | STREAMLIT | TABLE | TAG | TASK | VIEW | WORKSPACE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#object_type GrantPrivilegesToDatabaseRole#object_type}

---

### GrantPrivilegesToDatabaseRoleOnSchemaObjectAll <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectAll" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.inDatabase">in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.inSchema">in_schema</a></code> | <code>str</code> | The fully qualified name of the schema. |

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: AGENTS | AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | CORTEX SEARCH SERVICES | DATA METRIC FUNCTIONS | DATASETS | DBT PROJECTS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | IMAGE REPOSITORIES | ICEBERG TABLES | MASKING POLICIES | MATERIALIZED VIEWS | MCP SERVERS | MODELS | MODEL MONITORS | NETWORK RULES | NOTEBOOKS | ONLINE FEATURE TABLES | PACKAGES POLICIES | PASSWORD POLICIES | PIPES | PRIVACY POLICIES | PROCEDURES | PROJECTION POLICIES | ROW ACCESS POLICIES | SECRETS | SEMANTIC VIEWS | SERVICES | SESSION POLICIES | SEQUENCES | SNAPSHOTS | SNAPSHOT POLICIES | SNAPSHOT SETS | STAGES | STREAMS | STREAMLITS | TABLES | TAGS | TASKS | VIEWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#object_type_plural GrantPrivilegesToDatabaseRole#object_type_plural}

---

##### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}

---

##### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}

---

### GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.inDatabase">in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.inSchema">in_schema</a></code> | <code>str</code> | The fully qualified name of the schema. |

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: AGENTS | ALERTS | AUTHENTICATION POLICIES | CORTEX SEARCH SERVICES | DATA METRIC FUNCTIONS | DATASETS | DBT PROJECTS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | IMAGE REPOSITORIES | ICEBERG TABLES | MATERIALIZED VIEWS | MCP SERVERS | MODELS | MODEL MONITORS | NETWORK RULES | NOTEBOOKS | ONLINE FEATURE TABLES | PASSWORD POLICIES | PIPES | PRIVACY POLICIES | PROCEDURES | SECRETS | SEMANTIC VIEWS | SERVICES | SEQUENCES | SNAPSHOT POLICIES | SNAPSHOT SETS | STAGES | STREAMS | STREAMLITS | TABLES | TASKS | VIEWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#object_type_plural GrantPrivilegesToDatabaseRole#object_type_plural}

---

##### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}

---

##### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}

---

### GrantPrivilegesToDatabaseRoleTimeouts <a name="GrantPrivilegesToDatabaseRoleTimeouts" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#create GrantPrivilegesToDatabaseRole#create}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#delete GrantPrivilegesToDatabaseRole#delete}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#read GrantPrivilegesToDatabaseRole#read}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#update GrantPrivilegesToDatabaseRole#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#create GrantPrivilegesToDatabaseRole#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#delete GrantPrivilegesToDatabaseRole#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#read GrantPrivilegesToDatabaseRole#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#update GrantPrivilegesToDatabaseRole#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resetInDatabase">reset_in_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resetInSchema">reset_in_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_database` <a name="reset_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resetInDatabase"></a>

```python
def reset_in_database() -> None
```

##### `reset_in_schema` <a name="reset_in_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.resetInSchema"></a>

```python
def reset_in_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput">in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inSchemaInput">in_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput">object_type_plural_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inDatabase">in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inSchema">in_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_database_input`<sup>Optional</sup> <a name="in_database_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput"></a>

```python
in_database_input: str
```

- *Type:* str

---

##### `in_schema_input`<sup>Optional</sup> <a name="in_schema_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inSchemaInput"></a>

```python
in_schema_input: str
```

- *Type:* str

---

##### `object_type_plural_input`<sup>Optional</sup> <a name="object_type_plural_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput"></a>

```python
object_type_plural_input: str
```

- *Type:* str

---

##### `in_database`<sup>Required</sup> <a name="in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

---

##### `in_schema`<sup>Required</sup> <a name="in_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToDatabaseRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a>

---


### GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resetInDatabase">reset_in_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resetInSchema">reset_in_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_database` <a name="reset_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resetInDatabase"></a>

```python
def reset_in_database() -> None
```

##### `reset_in_schema` <a name="reset_in_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.resetInSchema"></a>

```python
def reset_in_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput">in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput">in_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput">object_type_plural_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inDatabase">in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inSchema">in_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_database_input`<sup>Optional</sup> <a name="in_database_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput"></a>

```python
in_database_input: str
```

- *Type:* str

---

##### `in_schema_input`<sup>Optional</sup> <a name="in_schema_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput"></a>

```python
in_schema_input: str
```

- *Type:* str

---

##### `object_type_plural_input`<sup>Optional</sup> <a name="object_type_plural_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput"></a>

```python
object_type_plural_input: str
```

- *Type:* str

---

##### `in_database`<sup>Required</sup> <a name="in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

---

##### `in_schema`<sup>Required</sup> <a name="in_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a>

---


### GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference <a name="GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putAll">put_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putFuture">put_future</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetFuture">reset_future</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetObjectName">reset_object_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetObjectType">reset_object_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_all` <a name="put_all" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putAll"></a>

```python
def put_all(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
) -> None
```

###### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putAll.parameter.objectTypePlural"></a>

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: AGENTS | AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | CORTEX SEARCH SERVICES | DATA METRIC FUNCTIONS | DATASETS | DBT PROJECTS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | IMAGE REPOSITORIES | ICEBERG TABLES | MASKING POLICIES | MATERIALIZED VIEWS | MCP SERVERS | MODELS | MODEL MONITORS | NETWORK RULES | NOTEBOOKS | ONLINE FEATURE TABLES | PACKAGES POLICIES | PASSWORD POLICIES | PIPES | PRIVACY POLICIES | PROCEDURES | PROJECTION POLICIES | ROW ACCESS POLICIES | SECRETS | SEMANTIC VIEWS | SERVICES | SESSION POLICIES | SEQUENCES | SNAPSHOTS | SNAPSHOT POLICIES | SNAPSHOT SETS | STAGES | STREAMS | STREAMLITS | TABLES | TAGS | TASKS | VIEWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#object_type_plural GrantPrivilegesToDatabaseRole#object_type_plural}

---

###### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putAll.parameter.inDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}

---

###### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putAll.parameter.inSchema"></a>

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}

---

##### `put_future` <a name="put_future" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putFuture"></a>

```python
def put_future(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
) -> None
```

###### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putFuture.parameter.objectTypePlural"></a>

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: AGENTS | ALERTS | AUTHENTICATION POLICIES | CORTEX SEARCH SERVICES | DATA METRIC FUNCTIONS | DATASETS | DBT PROJECTS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | IMAGE REPOSITORIES | ICEBERG TABLES | MATERIALIZED VIEWS | MCP SERVERS | MODELS | MODEL MONITORS | NETWORK RULES | NOTEBOOKS | ONLINE FEATURE TABLES | PASSWORD POLICIES | PIPES | PRIVACY POLICIES | PROCEDURES | SECRETS | SEMANTIC VIEWS | SERVICES | SEQUENCES | SNAPSHOT POLICIES | SNAPSHOT SETS | STAGES | STREAMS | STREAMLITS | TABLES | TASKS | VIEWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#object_type_plural GrantPrivilegesToDatabaseRole#object_type_plural}

---

###### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putFuture.parameter.inDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}

---

###### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.putFuture.parameter.inSchema"></a>

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}

---

##### `reset_all` <a name="reset_all" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_future` <a name="reset_future" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetFuture"></a>

```python
def reset_future() -> None
```

##### `reset_object_name` <a name="reset_object_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetObjectName"></a>

```python
def reset_object_name() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.resetObjectType"></a>

```python
def reset_object_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.all">all</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.future">future</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.allInput">all_input</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.futureInput">future_input</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectNameInput">object_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectName">object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.all"></a>

```python
all: GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference</a>

---

##### `future`<sup>Required</sup> <a name="future" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.future"></a>

```python
future: GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference</a>

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.allInput"></a>

```python
all_input: GrantPrivilegesToDatabaseRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectAll">GrantPrivilegesToDatabaseRoleOnSchemaObjectAll</a>

---

##### `future_input`<sup>Optional</sup> <a name="future_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.futureInput"></a>

```python
future_input: GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture">GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture</a>

---

##### `object_name_input`<sup>Optional</sup> <a name="object_name_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectNameInput"></a>

```python
object_name_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToDatabaseRoleOnSchemaObject
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaObject">GrantPrivilegesToDatabaseRoleOnSchemaObject</a>

---


### GrantPrivilegesToDatabaseRoleOnSchemaOutputReference <a name="GrantPrivilegesToDatabaseRoleOnSchemaOutputReference" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetAllSchemasInDatabase">reset_all_schemas_in_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetFutureSchemasInDatabase">reset_future_schemas_in_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_schemas_in_database` <a name="reset_all_schemas_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetAllSchemasInDatabase"></a>

```python
def reset_all_schemas_in_database() -> None
```

##### `reset_future_schemas_in_database` <a name="reset_future_schemas_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetFutureSchemasInDatabase"></a>

```python
def reset_future_schemas_in_database() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput">all_schemas_in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput">future_schemas_in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.allSchemasInDatabase">all_schemas_in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.futureSchemasInDatabase">future_schemas_in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_schemas_in_database_input`<sup>Optional</sup> <a name="all_schemas_in_database_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput"></a>

```python
all_schemas_in_database_input: str
```

- *Type:* str

---

##### `future_schemas_in_database_input`<sup>Optional</sup> <a name="future_schemas_in_database_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput"></a>

```python
future_schemas_in_database_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `all_schemas_in_database`<sup>Required</sup> <a name="all_schemas_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.allSchemasInDatabase"></a>

```python
all_schemas_in_database: str
```

- *Type:* str

---

##### `future_schemas_in_database`<sup>Required</sup> <a name="future_schemas_in_database" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.futureSchemasInDatabase"></a>

```python
future_schemas_in_database: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchemaOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToDatabaseRoleOnSchema
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleOnSchema">GrantPrivilegesToDatabaseRoleOnSchema</a>

---


### GrantPrivilegesToDatabaseRoleTimeoutsOutputReference <a name="GrantPrivilegesToDatabaseRoleTimeoutsOutputReference" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import grant_privileges_to_database_role

grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts">GrantPrivilegesToDatabaseRoleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GrantPrivilegesToDatabaseRoleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.grantPrivilegesToDatabaseRole.GrantPrivilegesToDatabaseRoleTimeouts">GrantPrivilegesToDatabaseRoleTimeouts</a>

---



