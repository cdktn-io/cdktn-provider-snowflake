# `icebergTableFromDeltaFiles` Submodule <a name="`icebergTableFromDeltaFiles` Submodule" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromDeltaFiles <a name="IcebergTableFromDeltaFiles" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files snowflake_iceberg_table_from_delta_files}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFiles;

IcebergTableFromDeltaFiles.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baseLocation(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .autoRefresh(java.lang.String)
//  .catalog(java.lang.String)
//  .comment(java.lang.String)
//  .externalVolume(java.lang.String)
//  .id(java.lang.String)
//  .replaceInvalidCharacters(java.lang.Boolean|IResolvable)
//  .timeouts(IcebergTableFromDeltaFilesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.baseLocation">baseLocation</a></code> | <code>java.lang.String</code> | Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.baseLocation"></a>

- *Type:* java.lang.String

Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#base_location IcebergTableFromDeltaFiles#base_location}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#database IcebergTableFromDeltaFiles#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#name IcebergTableFromDeltaFiles#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#schema IcebergTableFromDeltaFiles#schema}

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.autoRefresh"></a>

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#auto_refresh IcebergTableFromDeltaFiles#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#catalog IcebergTableFromDeltaFiles#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#comment IcebergTableFromDeltaFiles#comment}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.externalVolume"></a>

- *Type:* java.lang.String

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#external_volume IcebergTableFromDeltaFiles#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#replace_invalid_characters IcebergTableFromDeltaFiles#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#timeouts IcebergTableFromDeltaFiles#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetAutoRefresh">resetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts"></a>

```java
public void putTimeouts(IcebergTableFromDeltaFilesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

---

##### `resetAutoRefresh` <a name="resetAutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetAutoRefresh"></a>

```java
public void resetAutoRefresh()
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetComment"></a>

```java
public void resetComment()
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetExternalVolume"></a>

```java
public void resetExternalVolume()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetId"></a>

```java
public void resetId()
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetReplaceInvalidCharacters"></a>

```java
public void resetReplaceInvalidCharacters()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTableFromDeltaFiles resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFiles;

IcebergTableFromDeltaFiles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFiles;

IcebergTableFromDeltaFiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFiles;

IcebergTableFromDeltaFiles.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFiles;

IcebergTableFromDeltaFiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IcebergTableFromDeltaFiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IcebergTableFromDeltaFiles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IcebergTableFromDeltaFiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IcebergTableFromDeltaFiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromDeltaFiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList">IcebergTableFromDeltaFilesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList">IcebergTableFromDeltaFilesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList">IcebergTableFromDeltaFilesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference">IcebergTableFromDeltaFilesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefreshInput">autoRefreshInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocationInput">baseLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolumeInput">externalVolumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocation">baseLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.describeOutput"></a>

```java
public IcebergTableFromDeltaFilesDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList">IcebergTableFromDeltaFilesDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.parameters"></a>

```java
public IcebergTableFromDeltaFilesParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList">IcebergTableFromDeltaFilesParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.showOutput"></a>

```java
public IcebergTableFromDeltaFilesShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList">IcebergTableFromDeltaFilesShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeouts"></a>

```java
public IcebergTableFromDeltaFilesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference">IcebergTableFromDeltaFilesTimeoutsOutputReference</a>

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefreshInput"></a>

```java
public java.lang.String getAutoRefreshInput();
```

- *Type:* java.lang.String

---

##### `baseLocationInput`<sup>Optional</sup> <a name="baseLocationInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocationInput"></a>

```java
public java.lang.String getBaseLocationInput();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolumeInput"></a>

```java
public java.lang.String getExternalVolumeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharactersInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharactersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeoutsInput"></a>

```java
public IResolvable|IcebergTableFromDeltaFilesTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefresh"></a>

```java
public java.lang.String getAutoRefresh();
```

- *Type:* java.lang.String

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocation"></a>

```java
public java.lang.String getBaseLocation();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharacters"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromDeltaFilesConfig <a name="IcebergTableFromDeltaFilesConfig" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesConfig;

IcebergTableFromDeltaFilesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .baseLocation(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .autoRefresh(java.lang.String)
//  .catalog(java.lang.String)
//  .comment(java.lang.String)
//  .externalVolume(java.lang.String)
//  .id(java.lang.String)
//  .replaceInvalidCharacters(java.lang.Boolean|IResolvable)
//  .timeouts(IcebergTableFromDeltaFilesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.baseLocation">baseLocation</a></code> | <code>java.lang.String</code> | Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.autoRefresh">autoRefresh</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.baseLocation"></a>

```java
public java.lang.String getBaseLocation();
```

- *Type:* java.lang.String

Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#base_location IcebergTableFromDeltaFiles#base_location}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#database IcebergTableFromDeltaFiles#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#name IcebergTableFromDeltaFiles#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#schema IcebergTableFromDeltaFiles#schema}

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.autoRefresh"></a>

```java
public java.lang.String getAutoRefresh();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#auto_refresh IcebergTableFromDeltaFiles#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#catalog IcebergTableFromDeltaFiles#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#comment IcebergTableFromDeltaFiles#comment}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#external_volume IcebergTableFromDeltaFiles#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.replaceInvalidCharacters"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#replace_invalid_characters IcebergTableFromDeltaFiles#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.timeouts"></a>

```java
public IcebergTableFromDeltaFilesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#timeouts IcebergTableFromDeltaFiles#timeouts}

---

### IcebergTableFromDeltaFilesDescribeOutput <a name="IcebergTableFromDeltaFilesDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesDescribeOutput;

IcebergTableFromDeltaFilesDescribeOutput.builder()
    .build();
```


### IcebergTableFromDeltaFilesParameters <a name="IcebergTableFromDeltaFilesParameters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParameters;

IcebergTableFromDeltaFilesParameters.builder()
    .build();
```


### IcebergTableFromDeltaFilesParametersCatalog <a name="IcebergTableFromDeltaFilesParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersCatalog;

IcebergTableFromDeltaFilesParametersCatalog.builder()
    .build();
```


### IcebergTableFromDeltaFilesParametersExternalVolume <a name="IcebergTableFromDeltaFilesParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersExternalVolume;

IcebergTableFromDeltaFilesParametersExternalVolume.builder()
    .build();
```


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters;

IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters.builder()
    .build();
```


### IcebergTableFromDeltaFilesShowOutput <a name="IcebergTableFromDeltaFilesShowOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutput;

IcebergTableFromDeltaFilesShowOutput.builder()
    .build();
```


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus;

IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus.builder()
    .build();
```


### IcebergTableFromDeltaFilesShowOutputPartitionSpecs <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputPartitionSpecs;

IcebergTableFromDeltaFilesShowOutputPartitionSpecs.builder()
    .build();
```


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields;

IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields.builder()
    .build();
```


### IcebergTableFromDeltaFilesTimeouts <a name="IcebergTableFromDeltaFilesTimeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesTimeouts;

IcebergTableFromDeltaFilesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#create IcebergTableFromDeltaFiles#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#delete IcebergTableFromDeltaFiles#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#read IcebergTableFromDeltaFiles#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#update IcebergTableFromDeltaFiles#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#create IcebergTableFromDeltaFiles#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#delete IcebergTableFromDeltaFiles#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#read IcebergTableFromDeltaFiles#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#update IcebergTableFromDeltaFiles#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromDeltaFilesDescribeOutputList <a name="IcebergTableFromDeltaFilesDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesDescribeOutputList;

new IcebergTableFromDeltaFilesDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get"></a>

```java
public IcebergTableFromDeltaFilesDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesDescribeOutputOutputReference <a name="IcebergTableFromDeltaFilesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesDescribeOutputOutputReference;

new IcebergTableFromDeltaFilesDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.check">check</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.sourceIcebergType">sourceIcebergType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.writeDefault">writeDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput">IcebergTableFromDeltaFilesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.check"></a>

```java
public java.lang.String getCheck();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.isNullable"></a>

```java
public IResolvable getIsNullable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.nameMapping"></a>

```java
public java.lang.String getNameMapping();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.primaryKey"></a>

```java
public IResolvable getPrimaryKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.privacyDomain"></a>

```java
public java.lang.String getPrivacyDomain();
```

- *Type:* java.lang.String

---

##### `sourceIcebergType`<sup>Required</sup> <a name="sourceIcebergType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```java
public java.lang.String getSourceIcebergType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.uniqueKey"></a>

```java
public IResolvable getUniqueKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `writeDefault`<sup>Required</sup> <a name="writeDefault" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.writeDefault"></a>

```java
public java.lang.String getWriteDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput">IcebergTableFromDeltaFilesDescribeOutput</a>

---


### IcebergTableFromDeltaFilesParametersCatalogList <a name="IcebergTableFromDeltaFilesParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersCatalogList;

new IcebergTableFromDeltaFilesParametersCatalogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get"></a>

```java
public IcebergTableFromDeltaFilesParametersCatalogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesParametersCatalogOutputReference <a name="IcebergTableFromDeltaFilesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersCatalogOutputReference;

new IcebergTableFromDeltaFilesParametersCatalogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog">IcebergTableFromDeltaFilesParametersCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesParametersCatalog getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog">IcebergTableFromDeltaFilesParametersCatalog</a>

---


### IcebergTableFromDeltaFilesParametersExternalVolumeList <a name="IcebergTableFromDeltaFilesParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersExternalVolumeList;

new IcebergTableFromDeltaFilesParametersExternalVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get"></a>

```java
public IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference <a name="IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference;

new IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume">IcebergTableFromDeltaFilesParametersExternalVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesParametersExternalVolume getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume">IcebergTableFromDeltaFilesParametersExternalVolume</a>

---


### IcebergTableFromDeltaFilesParametersList <a name="IcebergTableFromDeltaFilesParametersList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersList;

new IcebergTableFromDeltaFilesParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get"></a>

```java
public IcebergTableFromDeltaFilesParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesParametersOutputReference <a name="IcebergTableFromDeltaFilesParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersOutputReference;

new IcebergTableFromDeltaFilesParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList">IcebergTableFromDeltaFilesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.externalVolume">externalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList">IcebergTableFromDeltaFilesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList">IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters">IcebergTableFromDeltaFilesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.catalog"></a>

```java
public IcebergTableFromDeltaFilesParametersCatalogList getCatalog();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList">IcebergTableFromDeltaFilesParametersCatalogList</a>

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.externalVolume"></a>

```java
public IcebergTableFromDeltaFilesParametersExternalVolumeList getExternalVolume();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList">IcebergTableFromDeltaFilesParametersExternalVolumeList</a>

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.replaceInvalidCharacters"></a>

```java
public IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList getReplaceInvalidCharacters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList">IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters">IcebergTableFromDeltaFilesParameters</a>

---


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList;

new IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get"></a>

```java
public IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference;

new IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters">IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters">IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList;

new IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get"></a>

```java
public IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference;

new IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">currentSnapshotId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.executionState">executionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">lastSnapshotTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pendingSnapshotCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentSnapshotId`<sup>Required</sup> <a name="currentSnapshotId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```java
public java.lang.Number getCurrentSnapshotId();
```

- *Type:* java.lang.Number

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```java
public java.lang.String getExecutionState();
```

- *Type:* java.lang.String

---

##### `lastSnapshotTime`<sup>Required</sup> <a name="lastSnapshotTime" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```java
public java.lang.String getLastSnapshotTime();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `pendingSnapshotCount`<sup>Required</sup> <a name="pendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```java
public java.lang.Number getPendingSnapshotCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromDeltaFilesShowOutputList <a name="IcebergTableFromDeltaFilesShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputList;

new IcebergTableFromDeltaFilesShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get"></a>

```java
public IcebergTableFromDeltaFilesShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesShowOutputOutputReference <a name="IcebergTableFromDeltaFilesShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputOutputReference;

new IcebergTableFromDeltaFilesShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.autoRefreshStatus">autoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.baseLocation">baseLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.canWriteMetadata">canWriteMetadata</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogNamespace">catalogNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogSyncName">catalogSyncName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogTableName">catalogTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.currentPartitionSpecId">currentPartitionSpecId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.externalVolumeName">externalVolumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableFormatVersion">icebergTableFormatVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableType">icebergTableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.nameMapping">nameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.partitionSpecs">partitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput">IcebergTableFromDeltaFilesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRefreshStatus`<sup>Required</sup> <a name="autoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.autoRefreshStatus"></a>

```java
public IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList getAutoRefreshStatus();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList</a>

---

##### `baseLocation`<sup>Required</sup> <a name="baseLocation" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.baseLocation"></a>

```java
public java.lang.String getBaseLocation();
```

- *Type:* java.lang.String

---

##### `canWriteMetadata`<sup>Required</sup> <a name="canWriteMetadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.canWriteMetadata"></a>

```java
public IResolvable getCanWriteMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `catalogNamespace`<sup>Required</sup> <a name="catalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogNamespace"></a>

```java
public java.lang.String getCatalogNamespace();
```

- *Type:* java.lang.String

---

##### `catalogSyncName`<sup>Required</sup> <a name="catalogSyncName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogSyncName"></a>

```java
public java.lang.String getCatalogSyncName();
```

- *Type:* java.lang.String

---

##### `catalogTableName`<sup>Required</sup> <a name="catalogTableName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogTableName"></a>

```java
public java.lang.String getCatalogTableName();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `currentPartitionSpecId`<sup>Required</sup> <a name="currentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```java
public java.lang.Number getCurrentPartitionSpecId();
```

- *Type:* java.lang.Number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `externalVolumeName`<sup>Required</sup> <a name="externalVolumeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.externalVolumeName"></a>

```java
public java.lang.String getExternalVolumeName();
```

- *Type:* java.lang.String

---

##### `icebergTableFormatVersion`<sup>Required</sup> <a name="icebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```java
public java.lang.Number getIcebergTableFormatVersion();
```

- *Type:* java.lang.Number

---

##### `icebergTableType`<sup>Required</sup> <a name="icebergTableType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableType"></a>

```java
public java.lang.String getIcebergTableType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameMapping`<sup>Required</sup> <a name="nameMapping" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.nameMapping"></a>

```java
public java.lang.String getNameMapping();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `partitionSpecs`<sup>Required</sup> <a name="partitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.partitionSpecs"></a>

```java
public IcebergTableFromDeltaFilesShowOutputPartitionSpecsList getPartitionSpecs();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsList</a>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput">IcebergTableFromDeltaFilesShowOutput</a>

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList;

new IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get"></a>

```java
public IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference;

new IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```java
public java.lang.Number getFieldId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```java
public java.lang.Number getSourceId();
```

- *Type:* java.lang.Number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```java
public java.lang.String getTransform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsList <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList;

new IcebergTableFromDeltaFilesShowOutputPartitionSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get"></a>

```java
public IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference;

new IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.specId">specId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs">IcebergTableFromDeltaFilesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```java
public IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList</a>

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```java
public java.lang.Number getSpecId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```java
public IcebergTableFromDeltaFilesShowOutputPartitionSpecs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs">IcebergTableFromDeltaFilesShowOutputPartitionSpecs</a>

---


### IcebergTableFromDeltaFilesTimeoutsOutputReference <a name="IcebergTableFromDeltaFilesTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.iceberg_table_from_delta_files.IcebergTableFromDeltaFilesTimeoutsOutputReference;

new IcebergTableFromDeltaFilesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IcebergTableFromDeltaFilesTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

---



