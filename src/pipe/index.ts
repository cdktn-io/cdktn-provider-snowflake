/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PipeConfig extends cdktn.TerraformMetaArguments {
  /**
  * (Default: `false`) Specifies a auto_ingest param for the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#auto_ingest Pipe#auto_ingest}
  */
  readonly autoIngest?: boolean | cdktn.IResolvable;
  /**
  * Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#aws_sns_topic_arn Pipe#aws_sns_topic_arn}
  */
  readonly awsSnsTopicArn?: string;
  /**
  * Specifies a comment for the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#comment Pipe#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the copy statement for the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#copy_statement Pipe#copy_statement}
  */
  readonly copyStatement: string;
  /**
  * The database in which to create the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#database Pipe#database}
  */
  readonly database: string;
  /**
  * Specifies the name of the notification integration used for error notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#error_integration Pipe#error_integration}
  */
  readonly errorIntegration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#id Pipe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies an integration for the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#integration Pipe#integration}
  */
  readonly integration?: string;
  /**
  * Specifies the identifier for the pipe; must be unique for the database and schema in which the pipe is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#name Pipe#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#schema Pipe#schema}
  */
  readonly schema: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#timeouts Pipe#timeouts}
  */
  readonly timeouts?: PipeTimeouts;
}
export interface PipeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#create Pipe#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#delete Pipe#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#read Pipe#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#update Pipe#update}
  */
  readonly update?: string;
}

export function pipeTimeoutsToTerraform(struct?: PipeTimeouts | cdktn.IResolvable): any {
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


export function pipeTimeoutsToHclTerraform(struct?: PipeTimeouts | cdktn.IResolvable): any {
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

export class PipeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipeTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PipeTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe snowflake_pipe}
*/
export class Pipe extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_pipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Pipe resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipe to import
  * @param importFromId The id of the existing Pipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_pipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/pipe snowflake_pipe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipeConfig
  */
  public constructor(scope: Construct, id: string, config: PipeConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_pipe',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.14.1',
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
    this._autoIngest = config.autoIngest;
    this._awsSnsTopicArn = config.awsSnsTopicArn;
    this._comment = config.comment;
    this._copyStatement = config.copyStatement;
    this._database = config.database;
    this._errorIntegration = config.errorIntegration;
    this._id = config.id;
    this._integration = config.integration;
    this._name = config.name;
    this._schema = config.schema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_ingest - computed: false, optional: true, required: false
  private _autoIngest?: boolean | cdktn.IResolvable; 
  public get autoIngest() {
    return this.getBooleanAttribute('auto_ingest');
  }
  public set autoIngest(value: boolean | cdktn.IResolvable) {
    this._autoIngest = value;
  }
  public resetAutoIngest() {
    this._autoIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIngestInput() {
    return this._autoIngest;
  }

  // aws_sns_topic_arn - computed: false, optional: true, required: false
  private _awsSnsTopicArn?: string; 
  public get awsSnsTopicArn() {
    return this.getStringAttribute('aws_sns_topic_arn');
  }
  public set awsSnsTopicArn(value: string) {
    this._awsSnsTopicArn = value;
  }
  public resetAwsSnsTopicArn() {
    this._awsSnsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsTopicArnInput() {
    return this._awsSnsTopicArn;
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

  // copy_statement - computed: false, optional: false, required: true
  private _copyStatement?: string; 
  public get copyStatement() {
    return this.getStringAttribute('copy_statement');
  }
  public set copyStatement(value: string) {
    this._copyStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStatementInput() {
    return this._copyStatement;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // error_integration - computed: false, optional: true, required: false
  private _errorIntegration?: string; 
  public get errorIntegration() {
    return this.getStringAttribute('error_integration');
  }
  public set errorIntegration(value: string) {
    this._errorIntegration = value;
  }
  public resetErrorIntegration() {
    this._errorIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIntegrationInput() {
    return this._errorIntegration;
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

  // integration - computed: false, optional: true, required: false
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  public resetIntegration() {
    this._integration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
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

  // notification_channel - computed: true, optional: false, required: false
  public get notificationChannel() {
    return this.getStringAttribute('notification_channel');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PipeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PipeTimeouts) {
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
      auto_ingest: cdktn.booleanToTerraform(this._autoIngest),
      aws_sns_topic_arn: cdktn.stringToTerraform(this._awsSnsTopicArn),
      comment: cdktn.stringToTerraform(this._comment),
      copy_statement: cdktn.stringToTerraform(this._copyStatement),
      database: cdktn.stringToTerraform(this._database),
      error_integration: cdktn.stringToTerraform(this._errorIntegration),
      id: cdktn.stringToTerraform(this._id),
      integration: cdktn.stringToTerraform(this._integration),
      name: cdktn.stringToTerraform(this._name),
      schema: cdktn.stringToTerraform(this._schema),
      timeouts: pipeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_ingest: {
        value: cdktn.booleanToHclTerraform(this._autoIngest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_sns_topic_arn: {
        value: cdktn.stringToHclTerraform(this._awsSnsTopicArn),
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
      copy_statement: {
        value: cdktn.stringToHclTerraform(this._copyStatement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktn.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_integration: {
        value: cdktn.stringToHclTerraform(this._errorIntegration),
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
      integration: {
        value: cdktn.stringToHclTerraform(this._integration),
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
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: pipeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
