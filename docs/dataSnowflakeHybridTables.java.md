# `dataSnowflakeHybridTables` Submodule <a name="`dataSnowflakeHybridTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeHybridTables <a name="DataSnowflakeHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables snowflake_hybrid_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTables;

DataSnowflakeHybridTables.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeHybridTablesIn)
//  .like(java.lang.String)
//  .limit(DataSnowflakeHybridTablesLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
//  .withIndexes(java.lang.Boolean|IResolvable)
//  .withKeys(java.lang.Boolean|IResolvable)
//  .withParameters(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withIndexes">withIndexes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withKeys">withKeys</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#in DataSnowflakeHybridTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#like DataSnowflakeHybridTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#limit DataSnowflakeHybridTables#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.startsWith"></a>

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#starts_with DataSnowflakeHybridTables#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_describe DataSnowflakeHybridTables#with_describe}

---

##### `withIndexes`<sup>Optional</sup> <a name="withIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withIndexes"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the show_indexes field. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_indexes DataSnowflakeHybridTables#with_indexes}

---

##### `withKeys`<sup>Optional</sup> <a name="withKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withKeys"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES.

The merged constraints are saved to the show_keys_output field, grouped by constraint name and ordered by kind, then by column names. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_keys DataSnowflakeHybridTables#with_keys}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withParameters"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_parameters DataSnowflakeHybridTables#with_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes">resetWithIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys">resetWithKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters">resetWithParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn"></a>

```java
public void putIn(DataSnowflakeHybridTablesIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit"></a>

```java
public void putLimit(DataSnowflakeHybridTablesLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId"></a>

```java
public void resetId()
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn"></a>

```java
public void resetIn()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike"></a>

```java
public void resetLike()
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith"></a>

```java
public void resetStartsWith()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

##### `resetWithIndexes` <a name="resetWithIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes"></a>

```java
public void resetWithIndexes()
```

##### `resetWithKeys` <a name="resetWithKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys"></a>

```java
public void resetWithKeys()
```

##### `resetWithParameters` <a name="resetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters"></a>

```java
public void resetWithParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTables;

DataSnowflakeHybridTables.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTables;

DataSnowflakeHybridTables.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTables;

DataSnowflakeHybridTables.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTables;

DataSnowflakeHybridTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeHybridTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeHybridTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeHybridTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeHybridTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables">hybridTables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput">startsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput">withIndexesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput">withKeysInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput">withParametersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes">withIndexes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys">withKeys</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `hybridTables`<sup>Required</sup> <a name="hybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables"></a>

```java
public DataSnowflakeHybridTablesHybridTablesList getHybridTables();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in"></a>

```java
public DataSnowflakeHybridTablesInOutputReference getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit"></a>

```java
public DataSnowflakeHybridTablesLimitOutputReference getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput"></a>

```java
public DataSnowflakeHybridTablesIn getInInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput"></a>

```java
public DataSnowflakeHybridTablesLimit getLimitInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput"></a>

```java
public java.lang.String getStartsWithInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withIndexesInput`<sup>Optional</sup> <a name="withIndexesInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput"></a>

```java
public java.lang.Boolean|IResolvable getWithIndexesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withKeysInput`<sup>Optional</sup> <a name="withKeysInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput"></a>

```java
public java.lang.Boolean|IResolvable getWithKeysInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withParametersInput`<sup>Optional</sup> <a name="withParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput"></a>

```java
public java.lang.Boolean|IResolvable getWithParametersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withIndexes`<sup>Required</sup> <a name="withIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes"></a>

```java
public java.lang.Boolean|IResolvable getWithIndexes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withKeys`<sup>Required</sup> <a name="withKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys"></a>

```java
public java.lang.Boolean|IResolvable getWithKeys();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withParameters`<sup>Required</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters"></a>

```java
public java.lang.Boolean|IResolvable getWithParameters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeHybridTablesConfig <a name="DataSnowflakeHybridTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesConfig;

DataSnowflakeHybridTablesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeHybridTablesIn)
//  .like(java.lang.String)
//  .limit(DataSnowflakeHybridTablesLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
//  .withIndexes(java.lang.Boolean|IResolvable)
//  .withKeys(java.lang.Boolean|IResolvable)
//  .withParameters(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes">withIndexes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys">withKeys</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in"></a>

```java
public DataSnowflakeHybridTablesIn getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#in DataSnowflakeHybridTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#like DataSnowflakeHybridTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit"></a>

```java
public DataSnowflakeHybridTablesLimit getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#limit DataSnowflakeHybridTables#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#starts_with DataSnowflakeHybridTables#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_describe DataSnowflakeHybridTables#with_describe}

---

##### `withIndexes`<sup>Optional</sup> <a name="withIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes"></a>

```java
public java.lang.Boolean|IResolvable getWithIndexes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the show_indexes field. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_indexes DataSnowflakeHybridTables#with_indexes}

---

##### `withKeys`<sup>Optional</sup> <a name="withKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys"></a>

```java
public java.lang.Boolean|IResolvable getWithKeys();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES.

The merged constraints are saved to the show_keys_output field, grouped by constraint name and ordered by kind, then by column names. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_keys DataSnowflakeHybridTables#with_keys}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters"></a>

```java
public java.lang.Boolean|IResolvable getWithParameters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_parameters DataSnowflakeHybridTables#with_parameters}

---

### DataSnowflakeHybridTablesHybridTables <a name="DataSnowflakeHybridTablesHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTables;

DataSnowflakeHybridTablesHybridTables.builder()
    .build();
```


### DataSnowflakeHybridTablesHybridTablesDescribeOutput <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesDescribeOutput;

DataSnowflakeHybridTablesHybridTablesDescribeOutput.builder()
    .build();
```


### DataSnowflakeHybridTablesHybridTablesParameters <a name="DataSnowflakeHybridTablesHybridTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParameters;

DataSnowflakeHybridTablesHybridTablesParameters.builder()
    .build();
```


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays;

DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays.builder()
    .build();
```


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays;

DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays.builder()
    .build();
```


### DataSnowflakeHybridTablesHybridTablesShowIndexes <a name="DataSnowflakeHybridTablesHybridTablesShowIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowIndexes;

DataSnowflakeHybridTablesHybridTablesShowIndexes.builder()
    .build();
```


### DataSnowflakeHybridTablesHybridTablesShowKeysOutput <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput;

DataSnowflakeHybridTablesHybridTablesShowKeysOutput.builder()
    .build();
```


### DataSnowflakeHybridTablesHybridTablesShowOutput <a name="DataSnowflakeHybridTablesHybridTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowOutput;

DataSnowflakeHybridTablesHybridTablesShowOutput.builder()
    .build();
```


### DataSnowflakeHybridTablesIn <a name="DataSnowflakeHybridTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesIn;

DataSnowflakeHybridTablesIn.builder()
//  .account(java.lang.Boolean|IResolvable)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database">database</a></code> | <code>java.lang.String</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema">schema</a></code> | <code>java.lang.String</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#account DataSnowflakeHybridTables#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#database DataSnowflakeHybridTables#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#schema DataSnowflakeHybridTables#schema}

---

### DataSnowflakeHybridTablesLimit <a name="DataSnowflakeHybridTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesLimit;

DataSnowflakeHybridTablesLimit.builder()
    .rows(java.lang.Number)
//  .from(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows">rows</a></code> | <code>java.lang.Number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from">from</a></code> | <code>java.lang.String</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#rows DataSnowflakeHybridTables#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#from DataSnowflakeHybridTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeHybridTablesHybridTablesDescribeOutputList <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList;

new DataSnowflakeHybridTablesHybridTablesDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get"></a>

```java
public DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference;

new DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check">check</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable">isNullable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey">primaryKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain">privacyDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord">schemaEvolutionRecord</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey">uniqueKey</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check"></a>

```java
public java.lang.String getCheck();
```

- *Type:* java.lang.String

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `isNullable`<sup>Required</sup> <a name="isNullable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable"></a>

```java
public IResolvable getIsNullable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey"></a>

```java
public IResolvable getPrimaryKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `privacyDomain`<sup>Required</sup> <a name="privacyDomain" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```java
public java.lang.String getPrivacyDomain();
```

- *Type:* java.lang.String

---

##### `schemaEvolutionRecord`<sup>Required</sup> <a name="schemaEvolutionRecord" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```java
public java.lang.String getSchemaEvolutionRecord();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```java
public IResolvable getUniqueKey();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesHybridTablesDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesList <a name="DataSnowflakeHybridTablesHybridTablesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesList;

new DataSnowflakeHybridTablesHybridTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get"></a>

```java
public DataSnowflakeHybridTablesHybridTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeHybridTablesHybridTablesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesOutputReference;

new DataSnowflakeHybridTablesHybridTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes">showIndexes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput">showKeysOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeHybridTablesHybridTablesDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a>

---

##### `showIndexes`<sup>Required</sup> <a name="showIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowIndexesList getShowIndexes();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a>

---

##### `showKeysOutput`<sup>Required</sup> <a name="showKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowKeysOutputList getShowKeysOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesHybridTables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList;

new DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference;

new DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersList <a name="DataSnowflakeHybridTablesHybridTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParametersList;

new DataSnowflakeHybridTablesHybridTablesParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList;

new DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference;

new DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference;

new DataSnowflakeHybridTablesHybridTablesParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList getDataRetentionTimeInDays();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a>

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList getMaxDataExtensionTimeInDays();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesHybridTablesParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a>

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesList <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowIndexesList;

new DataSnowflakeHybridTablesHybridTablesShowIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference;

new DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns">columns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns">includedColumns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique">isUnique</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns"></a>

```java
public java.lang.String getColumns();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `includedColumns`<sup>Required</sup> <a name="includedColumns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns"></a>

```java
public java.lang.String getIncludedColumns();
```

- *Type:* java.lang.String

---

##### `isUnique`<sup>Required</sup> <a name="isUnique" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique"></a>

```java
public IResolvable getIsUnique();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowIndexes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a>

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList;

new DataSnowflakeHybridTablesHybridTablesShowKeysOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference;

new DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns">referencedColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable">referencedTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule">updateRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `referencedColumns`<sup>Required</sup> <a name="referencedColumns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns"></a>

```java
public java.util.List<java.lang.String> getReferencedColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `referencedTable`<sup>Required</sup> <a name="referencedTable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable"></a>

```java
public java.lang.String getReferencedTable();
```

- *Type:* java.lang.String

---

##### `updateRule`<sup>Required</sup> <a name="updateRule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule"></a>

```java
public java.lang.String getUpdateRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowKeysOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesShowOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowOutputList;

new DataSnowflakeHybridTablesHybridTablesShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference;

new DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes">bytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes"></a>

```java
public java.lang.Number getBytes();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesHybridTablesShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a>

---


### DataSnowflakeHybridTablesInOutputReference <a name="DataSnowflakeHybridTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesInOutputReference;

new DataSnowflakeHybridTablesInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput"></a>

```java
public java.lang.Boolean|IResolvable getAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesIn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---


### DataSnowflakeHybridTablesLimitOutputReference <a name="DataSnowflakeHybridTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_hybrid_tables.DataSnowflakeHybridTablesLimitOutputReference;

new DataSnowflakeHybridTablesLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom"></a>

```java
public void resetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput"></a>

```java
public java.lang.Number getRowsInput();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue"></a>

```java
public DataSnowflakeHybridTablesLimit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---



